import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import coldstorageimg from "../../Images/coldstorageimg.jpeg"
import "./AddLand.css";
function AddColdStorageLand() {
  const [lgShow, setLgShow] = useState(false);
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
          <Modal.Title id="example-modal-sizes-title-lg ">
           <h4 className="midgreen">Add ColdStorage Land</h4> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0">
            <div className="col-12 col-lg-6  p-3" >
              <form
                className="row g-1 needs-validation"
                id="dataForm"
                noValidate
              >
                <div className="col-12">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label midgreen"
                  >
                    Area
                  </label>
                  <div className="has-validation">
                    <input
                      placeholder="Enter land area"
                      type="number"
                      className="form-control form-control-sm mb-1"
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
                    Address(Street or landmark)
                  </label>
                  <input
                    placeholder="Enter land Address"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    City
                  </label>
                  <input
                    placeholder="Enter City"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    State
                  </label>
                  <input
                    placeholder="Enter State"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Pin code
                  </label>
                  <input
                    placeholder="Enter your Pin code"
                    type="number"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Rent
                  </label>
                  <input
                    placeholder="Enter Rent per month"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Infrastructure
                  </label>

                  <select name="state" className="form-control form-control-sm mb-2 form-control-sm" onChange={(e) => { }} id="state" >
                    <option value="null">Select Infrastructure</option>
                    <option value="Good">Good</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Bad">Bad</option>
                  </select>
                  <div className="valid-feedback">
                    State selected!!
                  </div>
                  <div className="invalid-feedback">
                    Please select state !!
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Land Image
                  </label>
                  <input
                    placeholder="Upload Image"
                    type="file"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Description
                  </label>
                  <textarea
                    placeholder="Enter description"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12  columns signupbtn-col mt-3">
                  <div className="d-grid gap-2">
                    <button type="submit" name="" id="Submitbtn" className="btn btn-success btn-sm" >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-6 m-0 p-0" id="imgcol-cold">
              <img src={coldstorageimg} className="w-100 imgcol-cold-img " alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddColdStorageLand;
