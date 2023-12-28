import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../assets/leaves_Image.jpeg";
import { useDispatch,useSelector } from "react-redux";
import { userLogin,setUserData } from "../../store/userSlice";
// import { useNavigate } from "react-router-dom";

import "./UserSingIn.css";
import UserFogotPassword from "./UserForgetPassword.js";

import { setRoleStatus } from "../../store/commonSlice";
var userObj = {}
var email = false, password = false;
function UserSingIn() {
  const [lgShow, setLgShow] = useState(false);
  const [loginData, setLoginData] = useState({});
  const user_Data = useSelector(state=>state.userSlice)
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  function getData (event) {
    const {name, value} = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  function resetData() {
    email = false;
    password = false;
  }
  function validateEmail(e) {
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
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passwordField = document.getElementById('userSiginpassword');
    if (pattern.test(e.target.value.trim())) {
      const { name, value } = e.target;
      userObj = { ...userObj, [name]: value }
      passwordField.classList.add('is-valid');
      passwordField.classList.remove('is-invalid');
      password = true;
    }
    else {
      passwordField.classList.remove('is-valid');
      passwordField.classList.add('is-invalid');
      password = true;
    }
    if (e.target.value === "") {
      passwordField.classList.remove('is-valid');
      passwordField.classList.remove('is-invalid');
      password = false;
    }
  }
  function handelSubmit(e) {
    e.preventDefault();
    if (email && password) {
      userLogin(loginData).then((logData)=>{
        console.log("logData : ",logData);
        dispatch(setUserData(logData.log));
        dispatch(setRoleStatus({role:logData.role,expert:logData.expert_status, status: true}));
        // navigate('/contactus');
        setLgShow(false);
        // console.log("user : ",user_Data);
      }).catch((error)=>{
        console.log("User data not found : ",error)
      });
    }

  }

  function closeUsersingUpModal(){
    setLgShow(false)

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
                      <input placeholder="Enter Email Address" name="email" type="email" className="form-control" onChange={(event)=>{validateEmail(event); getData(event);}} id="userSinginemail" aria-describedby="inputGroupPrepend" required
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
                    <input placeholder="Enter Password" name="password" type="password" className="form-control" id="userSiginpassword" onChange={(event)=>{validatePassword(event); getData(event);}} required />
                    <div className="valid-feedback">
                      looks Good!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid password!!
                    </div>
                    <UserFogotPassword closeUsersingUpModal={closeUsersingUpModal}/>
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
export default UserSingIn;
