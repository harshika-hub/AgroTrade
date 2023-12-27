import { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import coldstorageimg from "../../../assets/coldstorageimg.jpeg"
import "./AddGrain.css";
import grainimg from "../../../assets/grainimg.webp";
import { Button } from "react-bootstrap";
function AddGrain() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button id="add-grain-button" onClick={() => setLgShow(true)} className="button fw-bold">
        Add Grain
      </Button>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Grain
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0" id="modal-body">
          <div className="row m-0 w-100 p-0">
            <div className="col-12 col-lg-7 col-md-12  p-3" id="graincol" >
              <form
                className="row g-1 needs-validation"
                id="dataForm"
                noValidate
              >
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label midgreen"
                  >
                    Name
                  </label>
                  <div className="has-validation">
                    <input
                      placeholder="Enter Grain Name "
                      type="number"
                      className="form-control form-control-sm mb-1"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a Grainname.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Type
                  </label>
                  <input
                    placeholder="Enter Type "
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Type.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Quantity
                  </label>
                  <input
                    placeholder="Enter Quantity"
                    type="number"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Quantity.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Shelf Life
                  </label>
                  <input
                    placeholder="Enter Shelf Life"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a vaild Shelf Life.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Price(per quantel)
                  </label>

                  <input
                    placeholder="Enter Your Price per Quantel"
                    type="number"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="valid-feedback">
                    State selected!!
                  </div>
                  <div className="invalid-feedback">
                    Please select state !!
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Moisture Level
                  </label>
                  <input
                    placeholder="Enter Moisture Level"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a Moisture level.
                  </div>
                </div>
               
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Address(Street,lendmark)
                  </label>
                  <input
                    placeholder="Enter Address"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a Address.
                  </div>
                </div>

                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    State
                  </label>
                  <input
                    placeholder="Enter your State"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid State.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    City
                  </label>
                  <input
                    placeholder="Enter Your City Name"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                    Pin code
                  </label>
                  <input
                    placeholder="Enter Your City Name"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                   Grain Image
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
                <div className="col-12 col-md-6 p-1">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label midgreen"
                  >
                  </label><br/>
                  <input className="m-2 mt-3" type="radio" name="grain" value="organic" />Organic
                  <input className="m-2 mt-3" type="radio" name="grain" value="inorganic" />Inorganic
                  {/* <input
                    placeholder="Enter Your City Name"
                    type="text"
                    className="form-control form-control-sm mb-1"
                    id="validationCustom03"
                    required
                  /> */}
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="col-12 ">
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
                <div className="col-12 col-md-6 p-2 columns signupbtn-col mt-3">
                  <div className="d-grid gap-2">
                    <button type="reset" name="" id="Submitbtn" className="btn btn-danger btn-sm" >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6 p-2 columns signupbtn-col mt-3">
                  <div className="d-grid gap-2">
                    <button type="reset" name="" id="Submitbtn" className="btn btn-success btn-sm" >
                      Submit
                    </button>
                  </div>
                </div>

              </form>
            </div>

            <div className="col-12  col-lg-5 m-0 p-0" id="imgcol-grain">
              <img src={grainimg} className="w-100 imgcol-grain-img " alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddGrain;