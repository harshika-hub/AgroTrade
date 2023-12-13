import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../Images/Agro-Trade-logo.png'
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ background: "transparent", border: "none", color: "green", fontSize: "40px" }} onClick={handleShow} className="me-2">
        <i className="bi bi-list"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>

            <img src={logo} style={{ width: "100px" }} alt="Agro Trade" />

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='row w-100 '>

            <div className='col-12  d-flex justify-content-around mb-3 ' >
              <div className="dropdown m-0">
                <a className="btn linksbtn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Sign In&nbsp;<i className="bi bi-box-arrow-in-right"></i>
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#"><i class="bi bi-person-circle"></i>&nbsp;User</a></li>
                  <li><a className="dropdown-item" href="#"><i class="bi bi-people-fill"></i>&nbsp;Orgnisation</a></li>
                </ul>
              </div>
              <div className="dropdown m-0">
                <a className="btn linksbtn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Sign Up&nbsp;<i className="fa-solid fa-pen-to-square"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#"><i class="bi bi-person-circle"></i>&nbsp;User</a></li>
                  <li><a className="dropdown-item" href="#"><i class="bi bi-people-fill"></i>&nbsp;Orgnisation</a></li>
                </ul>
              </div>

            </div>

            <div className='col-12 mt-2 mb-5' >
              <ul className="nav d-flex flex-column">
                <li className="nav-item ">
                  <a className="offcanvasLinks  darkgreen mb-1 nav-link active" aria-current="page" href="/home"><i className="bi bi-house-fill"></i>&nbsp;Home</a>
                </li>
                <li className="nav-item">
                  <a className="offcanvasLinks darkgreen mb-1  nav-link" href="/aboutus"><i className="bi bi-info-circle-fill"></i>&nbsp;About us</a>
                </li>
                <li className="nav-item">
                  <a className=" offcanvasLinks darkgreen mb-1 nav-link" href="services"> <i className="bi bi-gear-wide-connected"></i>&nbsp;Services</a>
                </li>
                <li className="nav-item">
                  <a className="offcanvasLinks darkgreen  mb-1  nav-link" href="contact"><i className="bi bi-telephone-fill"></i>&nbsp;Contact</a>
                </li>

              </ul>
            </div>

            <div className='col-12 mt-5'>
              <div className='ps-3'>
                <h5 className='darkgreen wght-600'><i className="bi bi-geo-fill"></i> <span>Address</span></h5>
                <p className='ms-3 text-break darkgreen'>
                  Yashwant Ganj,M.T Cloth Market,
                  Indore, Madhya Pradesh 452002
                </p>
              </div>
            </div>

            <div className='col-12'>
              <div className='ps-3'>
                <h5 className='darkgreen wght-600'><i className="bi bi-telephone-fill"></i> <span>Contact</span></h5>
                <p className='ms-3 text-break darkgreen'>
                  +91 99778 839880 <br />
                  +91 99778 839880
                </p>
              </div>
            </div>

            <div className='col-12   bginfo '>
              <div className='ps-3 '>
                <h5 className='darkgreen wght-600'><i className="bi bi-envelope"></i> <span>Email</span></h5>
                <p className='ms-3 text-break darkgreen'>
                  agrotrade@gmail.com
                </p>

              </div>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>

      <OffCanvasExample key={1} placement={"end"} name={"end"} />

    </>
  );
}

export default Example;


