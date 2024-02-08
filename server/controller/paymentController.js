import { cart } from "../models/userModel.js";
import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv'
import { grainOrder } from "../models/userModel.js";
import { payments } from "../models/userModel.js";
const { PAYPAL_MODE, PAYPAL_CLIENT_KEY, PAYPAL_SECRET_KEY } = process.env
dotenv.config();
paypal.configure({
    'mode': PAYPAL_MODE,
    'client_id': PAYPAL_CLIENT_KEY,
    'client_secret': PAYPAL_SECRET_KEY
})

export const grainPayController = async (request, response) => {
    // console.log("client",PAYPAL_CLIENT_KEY,"secret",PAYPAL_SECRET_KEY)
    // console.log("body", request.body)
    try {
        const { carts, order, invoice,day} = request.body;
        var cartarray = [];
        var total = 0;
        for (var i = 0; i < carts.length; i++) {
            cartarray[i] = {};
            cartarray[i].name = carts[i].grainname;
            cartarray[i].sku = carts[i].productId;
            // cartarray[i].price = Math.ceil(((carts[i].price*1.25)*(1.05)+100*1.05));
            cartarray[i].price = Math.ceil(Math.round((carts[i].price * 1.25)) + (carts[i].price * 0.05) + Math.round(100 * 1.05));
            total+=Math.ceil(Math.round((carts[i].price * 1.25)) + (carts[i].price * 0.05) + Math.round(100 * 1.05))*carts[i].quantity;
            cartarray[i].currency = "USD";
            cartarray[i].quantity = carts[i].quantity;
           
        }
        console.log("cartArray", cartarray, "total", total);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `http://localhost:3000/user/paysuccess/${total}/${invoice}/${order.address}/${carts[0]._id}/${day}/${order.shippingCharge}`,
                "cancel_url": "http://localhost:3000/user/paycancel"
            },
            "transactions": [{
                "item_list": {
                    "items": cartarray
                },
                "amount": {
                    "currency": "USD",
                    "total": total
                },
                "description": "Thank you for buying grain from agroTrade"
            }]
        };

        paypal.payment.create(create_payment_json, async function (error, payment) {
            if (error) {
                throw error;
            } else {
               
                console.log("payment creation", payment);
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        // response.redirect(payment.links[i].href);
                        response.send(payment.links[i].href);

                    }
                }
            }
        });

    } catch (error) {
        console.log("err in payment", error.message);
    }

}

export const grainPaysuccessController = async (request, response) => {
    console.log("inside success pay", request)
    try {

        const { id } = request.params;
        console.log("request params destructuring", id);

        var total = request.params.total;
        var address = request.params.address;
        var _id = request.params.id;
        var day = request.params.day;
        var invoice = request.params.invoice;
        let shippingCharge = request.params.shippingCharge;
        const payerId = request.query.PayerID;
        const paymentId = request.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": total
                }
            }]
        };
        paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
            if (error) {
                console.log("err in success payment", error.response);
                throw error;
            } else {

                const updateResult = await cart.updateMany(
                    {
                        $and: [
                            { _id: _id },
                            { order_g: false }
                        ]
                    },
                    {
                        $set: { order_g: true }
                    }
                );
                const orderResult = await grainOrder.create({
                    cart_id: _id,
                    order_date: Date.now(),
                    shipping_address: address,
                    total_pay: total,
                    shipping: shippingCharge,
                    invoice: invoice,
                    delivery_days: day,
                    payment_id: paymentId

                });
                console.log("order result",orderResult);

                const payResult = await payments.create({
                    payment_id: paymentId,
                    payer_id: payerId,
                    amount: total,
                });
                console.log("payment result",payResult);
                console.log("payment execute--------------------- ", JSON.stringify(payment));
                response.redirect('http://localhost:3001/market/successpay');
            }
        });

    } catch (error) {
        console.log("final err in success pay", error.message);
    }

}

export const grainPaycancelController = async (request, response) => {

    try {

        console.log("inside cancel pay");
        response.redirect('http://localhost:3001/market/cancelpay')

    } catch (error) {
        console.log("err in cancel", error.message);
    }

}