import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../Images/leaves_Image.jpeg";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { getOtp } from "../../store/commonSlice.js";
import { register } from "../../store/userSlice.js";
import axios from 'axios';
import { REQUESTED_URL } from "../../urls.js";

import "./singUpmodal.css"

function UserSingUpModal() {
  const [userData,setUserData] = useState({});
  const [otp, setOtp] = useState();
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();

  const getData = (event)=>{
    const {name,value} = event.target;
    setUserData({
      ...userData,
      [name] : value
    });
  }

  const handleGetOtp = async()=>{
    dispatch(getOtp(userData));
    document.getElementById("otpvarifyform").style.display = "block";
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(register({otp}));
  }



  return (
    <>
      <p onClick={() => setLgShow(true)}>
        <i className="bi bi-person-circle"></i>&nbsp;User
      </p>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
            AGRO TRADE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0">
            <div className="col-12 col-lg-6  p-4" id="datacol" >
              <h2 className="midgreen text-center ">Sign Up</h2>
              <form className="row g-3 needs-validation" id="dataForm" novalidate>
                <div className="col-12">
                  <label for="validationCustomUsername" className="form-label midgreen">
                    Email
                  </label>
                  <div className="has-validation">
                    <input placeholder="Emter Enail Address" name="email" onChange={getData} type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label for="validationCustom03" className="form-label midgreen">
                    password
                  </label>
                  <input placeholder="Enter Password" name="password" onChange={getData} type="password" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12" id="otpbtncol">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="OtpBtn" onClick={handleGetOtp} className="btn btn-success">Get OTP</button>
                  </div>
                </div>

                <h6 className="text-center darkgreen" >Already have Account ? <span className="midgreen">Sign Up</span> </h6>

              </form>

              <form className="row g-3 needs-validation mt-1" style={{ display: "none" }} id="otpvarifyform" novalidate>
                <div className="col-12">
                  <label for="validationCustom03" className="form-label midgreen">
                    OTP
                  </label>
                  <input placeholder="Enter OTP" onChange={(event)=>{setOtp(event.target.value)}} type="number" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 signupbtn-col">
                  <div className="d-grid gap-2">
                    <button type="button" name="" onClick={handleSubmit} id="Signupbtn" className="btn btn-success">Sign Up</button>
                  </div>
                </div>
              </form>

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
export default UserSingUpModal;
