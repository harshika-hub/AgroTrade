import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Agreemnet.css"
import logo from "../../../../../Images/Agro-Trade-logo.png"
import { creteAgreementCold } from "../../../../../store/organizationSlice.js"
import Digitalsignature from '../../../../DigitalSignature/Digitalsignature';
function AgreementModal(props) {
  const [show, setShow] = useState(false);
  const { contract } = props;
  const [enable, setEnable] = useState(false);
  const [orgSign, setSign] = useState('')
  const [formattedDateS, setformattedDate] = useState('')
  useEffect(() => {
   
    const timestamp = Date.now();
    const currentDate = new Date(timestamp);
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    setformattedDate(formattedDate)
  }, [])

 
  function creteAgreeCold() {
    var Obj = {
      _id: contract._id,
      orgSign,
      agreementDate: formattedDateS
    }
    console.log("This is the agree Obj", Obj);
    creteAgreementCold(Obj)
  }

  function EanbleButoon() {
    setEnable(!enable)

    if (!enable) {
      document.getElementById("sign-div").classList.remove("d-none")
    }
    else {
      document.getElementById("sign-div").classList.add("d-none")
    }

  }
  function getSignature(signPath) {
    console.log("This is the Sign Path", signPath);
    setSign(signPath)
    if (setSign) {
      document.getElementById("submitBtn").classList.remove("d-none")
    }
    else {
      document.getElementById("submitBtn").classList.add("d-none")
    }
  }

  function clearSignature(signPath) {
    setSign("")
    document.getElementById("submitBtn").classList.add("d-none")
  }
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Create Agreement
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="AgreementModal-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="AgreementModal-custom-modal-styling-title" className='darkgreen'>
            Agreement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-1'>


        <div className='w-100 h-100' id='agreement-page'>
            <div className='row w-100 m-0' >
              <div className='col-12 col-lg-3' >
                <div className='w-100 d-flex justify-content-center' >
                  <img className='w-50 align-self-center' src={logo} alt="AgroTrade" />
                </div>
                <h2 className='text-center darkgreen' >Agro Trade</h2>
              </div>
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center' >
                <h1 className='darkgreen'>Agriculture Land Agreement</h1>
              </div>
              <div className='col-12' >
                <h3 className='text-center darkgreen mt-4 mb-3' >Agreement Between [Organization Name] and [Farmer Name]</h3>

                <h4 className='darkgreen' >Agreement Description</h4>
                <p className='darkgreen' >This agreement is made effective as of {formattedDateS}, between [Organization Name],
                  located at [Organization Address], hereinafter referred to as the "Organization", and
                  [Farmer Name], residing at [Farmer Address], hereinafter referred to as the "Farmer".
                </p>


                <ol className='darkgreen' >
                  <h5 className='' style={{ fontWeight: "600" }}>1. Land and Crop Usage:</h5>
                  <li>The Farmer agrees to provide [specify the size and location of the land] for agricultural purposes to the Organization.</li>
                  <li> The Farmer agrees to cultivate and maintain crops on the provided land, specifically [mention the types of crops] during the term of this agreement.</li>
                  <li>The Organization shall have the right to inspect the land and crops periodically to ensure compliance with this agreement.</li>
                </ol>

                <ol className='darkgreen'>
                  <h5 style={{ fontWeight: "600" }}>2. Rent and Grain Fee:</h5>
                  <li>The Organization agrees to pay a monthly rent of [specify amount] to the Farmer for the use of the land. Rent payment shall be made on the [specify date] of each month.</li>
                  <li>The Organization agrees to pay the Farmer a predetermined fee for the grains produced on the land, as per the agreed-upon terms and conditions, upon harvest. The fee shall be calculated based on the quantity and quality of the grains delivered.</li>
                  <li> The Organization shall make the payment for the grains within [specify time frame] of the harvest.</li>
                </ol>

                <ol className='darkgreen'>
                  <h5 style={{ fontWeight: "600" }}>3. Term and Termination:</h5>
                  <li>This agreement shall commence on [start date] and shall continue for a period of [specify duration], unless terminated earlier as provided herein.</li>
                  <li> Either party may terminate this agreement with [specify notice period] written notice to the other party for any material breach of this agreement that remains uncured after [specify cure period] days.</li>
                </ol>

                <ol className='darkgreen'>
                  <h5 style={{ fontWeight: "600" }}>4. Price and Total Amount:</h5>
                  <li> The total price <b> $.{contract.contractDetails.price} </b>for the land usage and crop production services shall be calculated based on the agreed-upon rent and grain fee, as specified in Sections 2.1 and 2.2 of this agreement.</li>
                  <li>The total amount payable by the Organization to the Farmer shall be determined at the end of each harvest period.</li>
                </ol>

                <ol className='darkgreen'>
                  <h5 style={{ fontWeight: "600" }}>5.General Provisions:</h5>
                  <li>This agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior agreements, whether written or oral.</li>
                  <li> This agreement may only be modified or amended by a written instrument signed by both parties.</li>
                </ol>
                <hr />
              </div>

              <div className='col-12 d-flex justify-content-start ps-5'>
                <input type="checkbox" id='agree' onClick={EanbleButoon} className='form-check-input' name="agree" value="" required />
                &nbsp; &nbsp;<label className='form-check-label fs-5 darkgreen' for="agree">I Accept Terms and conditions</label>
              </div>

              <div className='col-12 col-lg-6 p-2 '>
                <div className='d-none w-100' id='sign-div'>
                  <Digitalsignature accepterName={"Organization  Signature"} clearSignature={clearSignature} getSignature={getSignature} />

                </div>
              </div>
              <div className='col-12 col-lg-6 p-2'>
                <img src={orgSign} alt="" />
                <hr />
                <h5 className="text-center darkgreen" >Farmer Signature</h5>
              </div>

            </div>

          </div>

        </Modal.Body>
        <Modal.Footer className='p-1' >
          <button type="button" onClick={creteAgreeCold}  className='btn btn-outline-success d-none' id='submitBtn'>Submit Agreement</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgreementModal;


