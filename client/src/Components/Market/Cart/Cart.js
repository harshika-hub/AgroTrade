import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { useEffect, useState } from 'react';
import { getCart } from '../../../store/marketSlice';
import jscookie from 'js-cookie'
export default function Cart(){
  const [cartCount,setCartCount]=useState(0)
  const dispatch=useDispatch();
    const[qty,setQty]=useState(0);
    const [items,setItems]=useState([]);
    var cartItem=useSelector(state=>state.marketSlice.cartItems);
    const getCartitem=async({token,email})=>{
      const cartItems=await dispatch(getCart({token,email}));
      console.log("cart items in grain component",cartItems);
      setCartCount(cartItems.payload.length)
      setItems([...cartItems.payload]);
    
   
     //  https://mdbootstrap.com/docs/standard/extended/shopping-carts/
   
       
     }
    useEffect(()=>{
      const token = jscookie.get('token')
      const email=jscookie.get('userEmail');
        console.log(cartItem);
          getCartitem({token,email})

    },[]);

    const handleClick = (event) => {
        // Increment the state by 1
        console.log("inside handleclick",event.target.id);
        if(event.target.id==='minus'||event.target.id==='minus-1')
        setQty((prevValue) => prevValue -1);
      else
      setQty((prevValue) => prevValue +1);

      };
    return(<>
    <section className="h-100 gradient-custom w-100 ">
  <div className="container-fluid py-5">
    <div className="row d-flex my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cartCount}</h5>
          </div>
          <div className="card-body">
            {/* <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7N1fMOoPhifYjMgqKfiPVMPA0Guoq-ZPiXmi5RxdHw&s"
                    className="w-100" alt="Blue Jeans Jacket" />
                  
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Wheat</strong></p>
                <p>good quality</p>
                <p>50000/quintal</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
             </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxWidth: '300px'}}>
                  <button className="btn btn-primary px-3 me-2" id='minus'
                    onClick={handleClick}                    >
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <span className="form-control">{qty}</span>
                    <label className="form-label" htmlFor="form1">Quantity</label>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={handleClick}
                    >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <p className="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
              </div>
            </div> */}

              {
                items.map((cart,i)=>{
                  return(
                    <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={"http://localhost:3000/"+cart.image}
                          className="w-100" />
                        <a href="#!">
                          <div className="mask mask-m" ></div>
                        </a>
                      </div>
                    </div>
      
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>{cart.grainname}</strong></p>
                      <p>{cart.productDescription}</p>
                      <p >Rs. {cart.price}</p>
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                        title="Remove item">
                        <i className="fas fa-trash"></i>
                      </button>
                      <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                        title="Move to the wish list">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
      
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4"style={{maxWidth: '300px'}}>
                        <button className="btn btn-primary px-3 me-2" id='minus-1'
                          >
                          <i className="fas fa-minus"></i>
                        </button>
      
                        <div className="form-outline">
                          <span className="form-control">{qty}</span>
      
                          <label className="form-label" htmlFor="form1">Quantity</label>
                        </div>
      
                        <button className="btn btn-primary px-3 ms-2"
                                      onClick={handleClick}                    >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    
                      <p className="text-start text-md-center">
                        <strong>$17.99</strong>
                      </p>
                    </div>
                    <hr className="my-4" />

                  </div>
                  )

                })
              }
            


          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        {/* <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
           
          </div>
        </div> */}
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>)
}