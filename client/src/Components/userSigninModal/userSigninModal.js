import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/userSlice";
import leafwallpaper from "../../Images/leaves_Image.jpeg";

import "./userSinginModal.css";
var userObj={}
var email=false,password=false;
function UserSinginModal() {
const [lgShow, setLgShow] = useState(false);
const dispatch = useDispatch();
  function resetData() {
    email=false;
    password=false;
  }
  const [login, loginUser] = useState({});
function handleInputs (e) {
    const name = e.target.name;
    const value = e.target.value;
    loginUser({ ...login, [name]: value });
};
 function handelSubmit(){
  console.log("login",login);
  dispatch(userLogin(login));
 }


return (
    <>
      <p onClick={() => setLgShow(true)}>
        <i className="bi bi-person-circle"></i>&nbsp;User
      </p>
      <Modal size="lg" show={lgShow} 
      onHide={
        () => {
          setLgShow(false)
          resetData()
        }
      }
       
      backdrop="static" aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
            USER
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0 d-flex">
            <div className="col-12 col-lg-6 " id="datacol">
              <div id="overlay" >
                <h1 className="midgreen text-center mt-3">Sign in</h1>
                <form className="row g-3 needs-validation" id="dataForm" onSubmit={handelSubmit} noValidate>
                  <div className="col-12 columns mt-4">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label midgreen"
                    >
                      Email
                    </label>
                    <div className="has-validation">
                      <input placeholder="Enter Email Address" type="email" className="form-control" onChange={handleInputs}  id="userSinginemail" aria-describedby="inputGroupPrepend" name='email' required
                      />
                      <div className="valid-feedback">
                        Correct email!!
                      </div>
                      <div className="invalid-feedback">
                         Invalid email!!!
                      </div>
                    </div>
                  </div>
                  <div className="col-12  columns ">
                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                      password
                    </label>
                    <input placeholder="Enter Password" type="password" className="form-control" id="userSiginpassword" onChange={handleInputs} name='password'  required/>
                    <div className="valid-feedback">
                       looks Good!!
                    </div>
                    <div className="invalid-feedback">
                       Invalid password!! 
                    </div>
                  </div>

                  <div className="col-12  columns signupbtn-col mt-5">
                    <div className="d-grid gap-2">
                      <button type="submit" name="" id="Signupbtn" className="btn btn-success">
                        Sign in
                      </button>
                    </div>
                  </div>
                    <h6 className="text-center text-info">
                    Don't have account ? Create account {" "}
                    <span className="midgreen">Sign up</span>{" "}
                  </h6>
                </form>

              </div>
            </div>

            <div className="col-6 m-0 p-0" id="imgcol">
              <img src={leafwallpaper} className="w-100" alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default UserSinginModal;
