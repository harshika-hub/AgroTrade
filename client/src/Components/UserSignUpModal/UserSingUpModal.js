import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../Images/leaves_Image.jpeg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOtp } from "../../store/commonSlice.js";
import { userRegister } from "../../store/userSlice.js";
// import axios from 'axios';
// import { REQUESTED_URL } from "../../urls.js";
import "./singUpmodal.css"
import { useNavigate } from "react-router-dom";

var userObj = {};
var email = false, password = false;
function UserSingUpModal() {
  const [userData, setUserData] = useState({});
  const [otp, setOtp] = useState();
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const status=useSelector((state)=>{
    if(state.userSlice.signstatus){
      setLgShow(false)
      navigate("/");
    }
  })


  function resetData() {
    email = false;
    password = false;
  }

  var getData = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleGetOtp = async () => {
    if (email && password) {
      dispatch(getOtp(userData));
      // getOtp(userData);
      document.getElementById("otpvarifyform").style.display = "block";
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegister({ otp }));


  }
  function validateEmail(e) {
    getData(e);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailField = document.getElementById(e.target.id);
    if (pattern.test(e.target.value.trim())) {
      const { name, value } = e.target;
      userObj = { ...userObj, [name]: value.trim() }
      EmailField.classList.add('is-valid');
      EmailField.classList.remove('is-invalid');
      email = true;
    }
    else {
      EmailField.classList.remove('is-valid');
      EmailField.classList.add('is-invalid');
      email = false;
    }

    if (e.target.value === "") {
      EmailField.classList.remove('is-valid');
      EmailField.classList.remove('is-invalid');
      email = false;
    }
  }
  function validatePassword(e) {
    getData(e);
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var compnypasswordField = document.getElementById('userSignuppassword');
    if (pattern.test(e.target.value.trim())) {
      const { name, value } = e.target;
      userObj = { ...userObj, [name]: value }
      compnypasswordField.classList.add('is-valid');
      compnypasswordField.classList.remove('is-invalid');
      password = true;
    }
    else {
      compnypasswordField.classList.remove('is-valid');
      compnypasswordField.classList.add('is-invalid');
      password = true;
    }
    if (e.target.value === "") {
      compnypasswordField.classList.remove('is-valid');
      compnypasswordField.classList.remove('is-invalid');
      password = false;
    }
  }

  



  return (
    <>
      <p onClick={() => setLgShow(true)}>
        <i className="bi bi-person-circle"></i>&nbsp;User
      </p>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => { setLgShow(false); resetData() }}
        aria-labelledby="example-modal-sizes-title-lg"
        backdrop="static"
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
              <form className="row g-3 needs-validation" id="dataForm" noValidate>
                <div className="col-12">
                  <label htmlFor="validationCustomUsername" className="form-label midgreen">
                    Email
                  </label>
                  <div className="has-validation">
                    <input placeholder="Emter Enail Address" name="email" onChange={validateEmail} type="email" className="form-control" id="userSignUpemail" aria-describedby="inputGroupPrepend" required />
                    <div className="valid-feedback">
                      Correct email!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid email!!
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label midgreen">
                    password
                  </label>
                  <input placeholder="Enter Password" name="password" onChange={validatePassword} type="password" className="form-control" id="userSignuppassword" required />
                  <div className="valid-feedback">
                    Stromg Password!!
                  </div>
                  <div className="invalid-feedback">
                    Invalid password!!
                  </div>
                </div>

                <div className="col-12" id="otpbtncol">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="OtpBtn" onClick={handleGetOtp} className="btn btn-success">Get OTP</button>
                  </div>
                </div>

                <h6 className="text-center darkgreen" >Already have Account ? <span className="midgreen">Sign Up</span> </h6>

              </form>

              <form className="row g-3 needs-validation mt-1" style={{ display: "none" }} id="otpvarifyform" noValidate>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label midgreen">
                    OTP
                  </label>
                  <input placeholder="Enter OTP" onChange={(event) => { setOtp(event.target.value) }} type="number" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 signupbtn-col">
                  <div className="d-grid gap-2">
                    <button type="button" name="" id="SignUpBtn" onClick={handleSubmit} className="btn btn-success">Sign Up</button>
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
