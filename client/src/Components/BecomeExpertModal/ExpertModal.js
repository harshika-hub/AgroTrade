import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import expert from "../../assets/expert.jpg"
import "./ExpertModal.css"

function ExpertModal({setShow,show}) {
  const [expert,setExpert]=useState({})
  // const [show, setShow] = useState(false);
  const getData=(e)=>{
    let {name,value}=e.target;
    
  }
  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal
      size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Expert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container-fluid" >
        <div className="container  bg-white p-0" id="OrgFromBox" >
          <div className="row w-100 m-0 g-0 ">
            <div className="col-12 col-md-12 col-lg-6 m-0 pt-3" >
              <h2 className="midgreen text-center">Expert Details</h2>
              <form id="orgForm"  encType="multipart/form-data">
                <div className="row m-0 w-100" >


                  <div className=" col-12 col-md-12 p-2 ">
                    <label htmlFor="validationServer01" className="form-label midgreen">Education</label>
                    <input name="reeducationg_name" type="text" onChange={getData}
                     className="form-control form-control-sm" id="regestrName"  placeholder="Enter Education" required />
                    <div className="valid-feedback">
                      Correct education!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid education!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-12 p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen m-0 mt-1">Experience</label>
                    <select name="experience" className="form-control form-control-sm"  id="orgnisationtype" >
                      <option value="null">Select Experience</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Year</option>
                      <option value="3">3 Year</option>
                      <option value="4">4 Year</option>
                    </select>
                    <div className="valid-feedback">
                    Experience selected!!
                    </div>
                    <div className="invalid-feedback">
                    Please select Experience!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-12 p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen">Consultancy Fee Video</label>
                    <input name="consultancy_fee_video" type="number" className="form-control form-control-sm" id="restrNumber"  placeholder="Enter Consultancy Fee For Video" required />
                    <div className="valid-feedback">
                      Correct Consultancy Fee Video!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid Consultancy Fee Video!!
                    </div>
                  </div>


                  <div className=" col-12 col-md-12 p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen m-0 mt-1">Consultancy Fee chat</label>
                    <input name="consultancy_fee_chat" type="number" className="form-control form-control-sm" id="compnyEmailField"  placeholder="Enter Consultancy Fee chat" required />
                    <div className="valid-feedback">
                      Correct Consultancy Fee chat!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid Consultancy Fee chat !!
                    </div>
                  </div>

                  {/* <div className=" col-12 col-md-6  p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen m-0 mt-1">Password</label>
                    <input name="password" type="password" className="form-control form-control-sm" id="compnypasswordField"  placeholder="Enter Password" required />
                    <div className="valid-feedback">
                      Strong Password!!
                    </div>
                    <div className="invalid-feedback">
                      Weak Password!!
                    </div>
                  </div> */}

                  <div className=" col-12 col-md-12 p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen m-0 mt-1">Consultancy Feild</label>
                    <select name="consultancy_feild" className="form-control form-control-sm"  id="orgnisationtype" >
                      <option value="null">Select Consultancy Feild</option>
                      <option value="Vedio Call">Vedio Call</option>
                      <option value="Chats">Chats</option>
                    </select>
                    <div className="valid-feedback">
                    Consultancy Feild selected!!
                    </div>
                    <div className="invalid-feedback">
                      Please select Consultancy Feild!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-12 p-2">
                    <label htmlFor="validationServer01" className="form-label midgreen m-0 mt-1">Certificate Image </label>
                    <input type="file" className="form-control form-control-sm" name="certificate"  id="image" />
                  </div>

                  <div className=" col-12 col-md-6 mt-1  p-1">
                    <div className="d-grid gap-2">
                      <button
                        type="reset"
                        name=""
                        id=""
                        className="btn btn-danger"
                      >
                        Reset
                      </button>
                    </div>

                  </div>

                  <div className=" col-12 col-md-6 mt-1 mb-1 p-1">
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        name=""
                        id=""
                        className="btn btn-success"
                      >
                        Submit
                      </button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
            <div id="imageColumn" className="col-12 col-lg-6"  >
              {/* <img src={expert} alt="" className="w-100 h-100" /> */}
            </div>
          </div>
        </div>
      </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default  ExpertModal;