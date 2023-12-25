import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import coldstorageimg from "../../Images/coldstorageimg.jpeg"
import "./AddLand.css";
import Equipmentimage from "../../Images/Equipment.jpg";
function AddEquipment() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <p onClick={() => setLgShow(true)}>
                <i className="bi bi-people-fill"></i>&nbsp;Equipment
            </p>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
                        Add Equipment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="row m-0 w-100 p-0">
                        <div className="col-12 col-lg-7 col-md-12  p-3" >
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
                                            placeholder="Enter Equipment Name "
                                            type="text"
                                            className="form-control form-control-sm mb-1"
                                            id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please choose a Equipment name.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Model No.
                                    </label>
                                    <input
                                        placeholder="Enter Model Number "
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid Model No.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Equipment Type
                                    </label>
                                    <select name="state" className="form-control form-control-sm mb-1 form-control-sm" onChange={(e) => { }} id="state" >
                                        <option value="null">Select Equipment Type</option>
                                        <option value="Vehical">Vehical</option>
                                        <option value="Equipment">Equipment</option>
                                        
                                    </select>
                                    <div className="valid-feedback">
                                        State selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please select Equipment !!
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustomUsername"
                                        className="form-label midgreen"
                                    >
                                        Price(per hours)
                                    </label>
                                    <div className="has-validation">
                                        <input
                                            placeholder="Enter price per hours"
                                            type="number"
                                            className="form-control form-control-sm mb-1"
                                            id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please choose a Equipment name.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                       Condition
                                    </label>
                                    <select name="state" className="form-control form-control-sm mb-1 form-control-sm" onChange={(e) => { }} id="state" >
                                        <option value="null">Select Condition</option>
                                        <option value="Good">Good</option>
                                        <option value="Modrate">Moderate</option>
                                        <option value="Bad">Bad</option>
                                    </select>
                                    <div className="valid-feedback">
                                        Condition selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please select Condition!!
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
                                        Please provide a Quantity.
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
                                       Address
                                    </label>
                                    <input
                                        placeholder="Enter Address"
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
                                        Equipment Image
                                    </label>
                                    <input
                                        placeholder="Upload Image"
                                        type="file"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a Image.
                                    </div>
                                </div>
                                
                                <div className="col-12  p-1">
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
                                <div className="col-12 col-md-6 p-1  mt-1">
                                    <div className="d-grid gap-2">
                                        <button type="reset" name="" id="Submitbtn" className="btn btn-danger btn-sm" >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-2  mt-1">
                                    <div className="d-grid gap-2">
                                        <button type="submit" name="" id="Submitbtn" className="btn btn-success btn-sm" >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12  col-lg-5 m-0 p-0" id="imgcol-equi">
                            <img src={Equipmentimage} className="img-fluid " alt="" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AddEquipment;
