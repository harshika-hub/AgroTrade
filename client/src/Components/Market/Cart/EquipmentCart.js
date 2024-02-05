
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { useEffect, useState } from 'react';
import { getCartequipment, updateProductQuantityInStore, updateCartqtyEquipment, removeCartequipment } from '../../../store/marketSlice';
import jscookie from 'js-cookie';
import Swal from 'sweetalert2';

export default function EquipmentCart() {
  var token = jscookie.get('token');
  var email = jscookie.get('userEmail');
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const[eCartcount,setEcartCount]=useState(0);
  const [billGrain,setBillGrain]=useState({});
  const [billEquip,setBillEquip]=useState({});

  // const cartItem = useSelector((state) => state.marketSlice.cartItem);

  const getCartitem = async ({ token, email }) => {
    const cartItems = await dispatch(getCartequipment({ token, email }));
    if (cartItems.payload){
      setItems([...cartItems.payload]);
      setEcartCount(cartItems.payload.length)
    }
    let qty=0;
    cartItems.payload.forEach(itm=>{
      qty+=itm.quantity;
    });
  }

  async function handleRemove(cartId, productId) {
    let remove = await dispatch(removeCartequipment({ cartId, productId, token, email }));
    console.log("after removing cart product ", remove);
    const cartItems = await dispatch(getCartequipment({ token, email }));
    if (cartItems.payload)
      setItems([...cartItems.payload]);
    if (remove.payload.status === 200) {
      Swal.fire({
        position: "middle",
        icon: "info",
        title: "item removed from cart",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: "middle",
        icon: "info",
        title: "please try again there is some problem",
        showConfirmButton: false,
        timer: 2000
      });
    }

  }
  const handleClick = async (_id, productId, operation, index) => {
    const updatedItems = [...items];

    if (updatedItems[index]._id === _id) {
      if (updatedItems[index].quantity > 0) {
        let newQty = operation === 'increment' ? updatedItems[index].quantity + 1 : updatedItems[index].quantity - 1;
        if (newQty === 0) {
          newQty = 1
          Swal.fire({
            position: "middle",
            icon: "info",
            title: "quantity can't be less than one",
            showConfirmButton: false,
            timer: 1500
          });
        }

        dispatch(updateProductQuantityInStore({ _id, quantity: newQty }));
        dispatch(updateCartqtyEquipment({ _id, productId, quantity: newQty, token, email }));
        updatedItems[index] = { ...updatedItems[index], quantity: newQty };
        setItems(updatedItems);
      } else {
        Swal.fire({
          position: "middle",
          icon: "info",
          title: "Its invalid quantity",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  const calculateProductsTotal = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price*item.quantity + (item.price*item.quantity * 0.25);
    });
    // setBill({...bill,['productTotal']:total})
    return total.toFixed(2);
  };

 
  // const gstTotal = () => {
  //   const productsTotal = parseFloat(calculateProductsTotal());
  //   const total = (productsTotal*0.05);
  //   return total.toFixed(2);
  // };

  const shipping=()=>{
 let totalQty=0;
        items.forEach(item=>{
          totalQty+=item.quantity;
        })
        return totalQty*100;
  }
  const calculateTotal = () => {
    const productsTotal = parseFloat(calculateProductsTotal());
    let totalQty=0;
    items.forEach(item=>{
      totalQty+=item.quantity;
    })
    const shippingTotal = 100*totalQty;
    // setBill({...bill,['shipping']:shippingTotal});
    const total = productsTotal + shippingTotal;
    // setBill({...bill,['grand']:total});
    return total.toFixed(2);
  };
  useEffect(() => {
    getCartitem({ token, email });
  }, [token]);

  return (
    <>
      <section className="h-100 gradient-custom w-100">
        <div className="container-fluid py-1">
          <div className="row d-flex my-0">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-4">
                  <h5 className="mb-0">Equipment-Cart-{eCartcount}</h5>
                </div>
                <div className="card-body">
                  {items.map((cart, i) => (
                    <div className="row" key={i}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <img src={`http://localhost:3000/${cart.image}`} className="w-100" alt="Product" />
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{cart.productName}</strong></p>
                        <p>{cart.productDescription}</p>
                        <p>Rs. {(cart.price) + (cart.price) * (0.25)}</p>

                        <button type="button" className="btn btn-warning btn-sm me-1 mb-2" onClick={() => handleRemove(cart._id, cart.productId)}>
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                          <button className="btn btn-warning  px-3 me-2" onClick={() => handleClick(cart._id, cart.productId, 'decrement', i)}>
                            <i className="fas fa-minus"></i>
                          </button>
                          <div className="form-outline">
                            <span className="form-control">{cart.quantity}</span>
                            <label className="form-label" htmlFor="form1">Quantity</label>
                          </div>
                          <button className="btn btn-warning  px-3 ms-2" onClick={() => handleClick(cart._id, cart.productId, 'increment', i)}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>Total: Rs. {(cart.price + (cart.price) * (0.25)) * cart.quantity}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Equipment-Cart Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Equipments
                      <span>${calculateProductsTotal()}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>{shipping()}</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Gst(5%)
                      <span>{gstTotal()}</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including shipping)</p>
                        </strong>
                      </div>
                      <span><strong>${calculateTotal()}</strong></span>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-warning  btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
