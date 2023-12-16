import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../Images/factory1.jpeg";

import "./orgSignUpModal.css";
function OrgSingUpModal() {
  const [lgShow, setLgShow] = useState(false);
  function getOtp() {
    document.getElementById("otpvarifyform").style.display = "block";
  }
  return (
    <>
      <p onClick={() => setLgShow(true)}>
        <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
      </p>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
            ORGANIZATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0">
            <div className="col-12 col-lg-6  p-4" id="datacol">
              <h2 className="midgreen text-center ">Sign Up</h2>
              <form
                className="row g-3 needs-validation"
                id="dataForm"
                noValidate
              >
                <div className="col-12">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label midgreen"
                  >
                    Email
                  </label>
                  <div className="has-validation">
                    <input
                      placeholder="Emter Enail Address"
                      type="email"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    password
                  </label>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12" id="otpbtncol">
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      name=""
                      id="OtpBtn"
                      onClick={getOtp}
                      className="btn btn-success"
                    >
                      Get OTP
                    </button>
                  </div>
                </div>

                <h6 className="text-center text-secondary">
                  Already have Account ?{" "}
                  <span className="midgreen">Sign Up</span>{" "}
                </h6>
              </form>

              <form
                className="row g-3 needs-validation mt-1"
                style={{ display: "none" }}
                id="otpvarifyform"
                noValidate
              >
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    OTP
                  </label>
                  <input
                    placeholder="Enter OTP"
                    type="number"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 signupbtn-col">
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      name=""
                      id="Signupbtn"
                      className="btn btn-success"
                    >
                      Sign Up
                    </button>
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
export default OrgSingUpModal;