import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../assets/factory1.jpeg";

import "./orgSigninModal.css";
var orgObj={}
var email =false,password=false;
function OrgSinginModal() {
  const [lgShow, setLgShow] = useState(false);

  function resetData() {
    email=false;
    password=false;
  }
  function validateEmail(e) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     var EmailField = document.getElementById(e.target.id);
     if (pattern.test(e.target.value.trim())){
       const {name,value}=e.target;
       orgObj={...orgObj,[name]:value.trim()}
       EmailField.classList.add('is-valid');
       EmailField.classList.remove('is-invalid');
       email=true;
     }
     else{
       EmailField.classList.remove('is-valid');
       EmailField.classList.add('is-invalid');
       email=false;
     }
 
     if(e.target.value===""){
       EmailField.classList.remove('is-valid');
       EmailField.classList.remove('is-invalid');
       email=false;
     }
   }
  function validatePassword(e) {
     const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     var passwordField = document.getElementById('orgSiginpassword');
     if (pattern.test(e.target.value.trim())){
       const {name,value}=e.target;
       orgObj={...orgObj,[name]:value}
       passwordField.classList.add('is-valid');
       passwordField.classList.remove('is-invalid');
       password=true;
       }
     else{
       passwordField.classList.remove('is-valid');
       passwordField.classList.add('is-invalid');
       password=true;
     }
     if(e.target.value===""){
       passwordField.classList.remove('is-valid');
       passwordField.classList.remove('is-invalid');
       password=false;
     }
 }

  function handelSubmit(e) {
    if (email && password) {
      /////////////// Send Axiox request here
      alert("Send Axiox request here")
    }   
 }
  
  return (
    <>
      <p onClick={() => setLgShow(true)}>
      <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
      </p>

      <Modal  size="lg" show={lgShow} onHide={() => {setLgShow(false); resetData()}} backdrop="static" aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
            Orgnisation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0 d-flex">
            <div className="col-12 col-lg-6 " id="datacolm">
              <div id="overlay" >
                <h1 className="midgreen text-center mt-3">Sign in</h1>
                <form onSubmit={handelSubmit} className="row g-3 needs-validation" id="dataForm" noValidate>
                  <div className="col-12 columns mt-4">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label midgreen"
                    >
                      Email
                    </label>
                    <div className="has-validation">
                      <input placeholder="Enter Email Address" type="email" className="form-control" onChange={validateEmail} id="orgSigninemail" aria-describedby="inputGroupPrepend" required
                      />
                      <div className="valid-feedback">
                      Correct email!!
                      </div>
                      <div className="invalid-feedback">
                      Invalid email!!
                      </div>
                    </div>
                  </div>
                  <div className="col-12  columns ">
                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                      password
                    </label>
                    <input placeholder="Enter Password" type="password" className="form-control" id="orgSiginpassword" onChange={validatePassword} required/>
                    <div className="valid-feedback">
                      Valid password!!
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
export default OrgSinginModal;
