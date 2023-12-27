import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import landimag from '../../../assets/landimg.jpeg'
import "./AddAgricultureLand.css";
import { Button } from "react-bootstrap";
function AddAgricultureLand() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Button onClick={() => setLgShow(true)}>
                Add Orgnisation
            </Button>
            6<Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
                        Add Agriculture Land
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="container-fluid" >
                        <div className="container  bg-white p-0" id="OrgFromBox" >
                            <div className="row w-100 m-0 g-0 ">
                                <div id="imgcol-agri" className="col-12 col-lg-6"  >
                                    <img src={landimag} alt="" className="w-100 " />
                                </div>
                                <div className="col-12 col-lg-6  p-4" >
                                    <form
                                        className="row g-1 needs-validation"
                                        noValidate
                                    >
                                        <div className="col-12">
                                            <label
                                                htmlFor="validationCustomUsername"
                                                className="form-label midgreen "
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
                                                    Please add area .
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="validationCustom03"
                                                className="form-label midgreen"
                                            >
                                                Agriculture Type
                                            </label>
                                            <select name="state" className="form-control form-control-sm mb-1 form-control-sm" onChange={(e) => { }} id="state" >
                                                <option value="null">Select Agriculture Type</option>
                                                <option value="organic">Organic</option>
                                                <option value="inorganic">Inorganic</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid Agriculture Type.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="validationCustom03"
                                                className="form-label midgreen"
                                            >
                                                Soil Type
                                            </label>
                                            <select name="state" className="form-control form-control-sm mb-1 form-control-sm" onChange={(e) => { }} id="state" >
                                                <option value="null">Select Soil Type</option>
                                                <option value="Alluvial Soilod">Alluvial Soil</option>
                                                <option value="Black Cotton Soil">Black Cotton Soil</option>
                                                <option value="Red & Yellow Soil">Red & Yellow Soil</option>
                                                <option value="Laterite Soil">Laterite Soil</option>
                                                <option value="Mountainous or Forest Soil">Mountainous or Forest Soil</option>
                                                <option value="Arid or Desert Soil">Arid or Desert Soil</option>
                                                <option value="Saline and Alkaline Soil">Saline and Alkaline Soil</option>
                                                <option value="Peaty and Marshy Soil">Peaty and Marshy Soil</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid Soil Type.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="validationCustom03"
                                                className="form-label midgreen"
                                            >
                                                Crop
                                            </label>
                                            <input
                                                placeholder="Enter Crop for farming"
                                                type="text"
                                                className="form-control  form-control-sm mb-1"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid Crop.
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
                                                Please provide a valid Address.
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
                                                Please provide a valid State.
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
                                                Please provide a valid pin code.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="validationCustom03"
                                                className="form-label midgreen"
                                            >
                                                Infrastructure
                                            </label>

                                            <select name="state" className="form-control form-control-sm mb-1 form-control-sm" onChange={(e) => { }} id="state" >
                                                <option value="null">Select Infrastructure</option>
                                                <option value="Good">Good</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Bad">Bad</option>
                                            </select>
                                            <div className="valid-feedback">
                                                State selected!!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please select Infrastucture !!
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
                                                Please provide a valid Image.
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
                                                Please provide a valid Description.
                                            </div>
                                        </div>
                                        <div className="col-12  columns signupbtn-col mt-4">
                                            <div className="d-grid gap-2">
                                                <button type="submit" name="" id="Submitbtn" className="btn btn-success" >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AddAgricultureLand;