import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import leafwallpaper from "../../assets/leaves_Image.jpeg";
function FogotpasswordModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {closeUsersingUpModal}=props
  //closeUsersingUpModal()
 function  showOtpfrom(){
  document.getElementById("otpvarifyform").style.display="block"

 }

 function  showPasswordFields() {
  document.getElementById("otpvarifyform").style.display="none"
  
  document.getElementById("passwordchangrForm").style.display="block"
 }
 

 



  return (
    <>

        <p className="text-end mt-1"  onClick={handleShow}> <Link className="text-danger  text-decoration-none">Forgot Password ?</Link></p>
        <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row m-0 w-100 p-0">
            <div className="col-12 col-lg-6  p-4" id="datacol" >
              <h2 className="midgreen text-center ">Forogt Password</h2>
              <form className="row g-3 needs-validation" id="dataForm" noValidate>
                <div className="col-12">
                  <label htmlFor="validationCustomUsername" className="form-label midgreen">
                    Email
                  </label>
                  <div className="has-validation">
                    <input placeholder="Emter Enail Address" name="email"  type="email" className="form-control" id="userSignUpemail" aria-describedby="inputGroupPrepend" required />
                    <div className="valid-feedback">
                      Correct email!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid email!!
                    </div>
                  </div>
                </div>
            
                <div className="col-12" id="otpbtncol">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="getotpBtn" onClick={showOtpfrom} className="btn btn-success" >Get OTP</button>
                  </div>
                </div>


              </form>

              <form className="row g-3 needs-validation mt-1" style={{ display: "none" }} id="otpvarifyform" noValidate>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label midgreen">
                    OTP
                  </label>
                  <input placeholder="Enter OTP" type="number" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 signupbtn-col">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="SignUpBtn"className="btn btn-success" onClick={showPasswordFields} >Varify OTP</button>
                  </div>
                </div>
              </form>


              <form className="row g-3 needs-validation mt-1" style={{ display: "none" }} id="passwordchangrForm" noValidate>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label midgreen">
                    Password
                  </label>
                  <input placeholder="Create Password" type="password" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label midgreen">
                  Confirm Password
                  </label>
                  <input placeholder="Confirm Password" type="password" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 signupbtn-col">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="SignUpBtn"className="btn btn-success">Submit</button>
                  </div>
                </div>
              </form>






              
              
               <h6 className="text-center midgreen mt-3" onClick={()=>{setShow(false)}} >Go to Sing in Page </h6>
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

export default FogotpasswordModal;