import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/Agro-Trade-logo.png'
import { Link } from 'react-router-dom';
import "./DashboardLinks.css"
function DashoffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button style={{ background: "transparent", border: "none", color: "green", fontSize: "40px" }} onClick={handleShow} className="me-2">
        <i className="bi bi-list"></i>
      </Button> */}

      <Link to="#" className="sidebar-toggler m-2 text-decoration-none flex-shrink-0" onClick={handleShow} id="navToggler">
                 <i className="fa-solid fa-bars midgreen"></i>
       </Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>

            <img src={logo} style={{ width: "100px" }} alt="Agro Trade" />

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='row w-100 '>
            {
              true ? <div className='col-12  d-flex justify-content-end   '> <button type="Button" className="btn btn-danger">Log Out&nbsp;<i className="bi bi-box-arrow-right"></i></button></div>
                :
                <div className='col-12  d-flex justify-content-around mb-3 '>
                  <div className="dropdown m-0">
                    <Link className="btn linksbtn btn-warning dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign In&nbsp;<i className="bi bi-box-arrow-in-right"></i>
                    </Link>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link className="dropdown-item" to="#"></Link></li>
                      <li><Link className="dropdown-item" to="#"></Link></li>
                    </ul>
                  </div>
                  <div className="dropdown m-0">
                    <Link className="btn linksbtn btn-warning dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign Up&nbsp;<i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link className="dropdown-item" to="#"></Link></li>
                      <li><Link className="dropdown-item" to="orgSignup"><i className="bi bi-people-fill"></i>&nbsp;Orgnisation</Link></li>
                    </ul>
                  </div>

                </div>
            }
            
            {
              true ? <div className='col-12 mt-2 mb-5 ' >
                <ul className="nav d-flex flex-column">
                  <li className="nav-item ">
                    <Link className="offcanvasLinks  darkgreen mb-1 nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill"></i>&nbsp;Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="offcanvasLinks darkgreen mb-1  nav-link" to="/aboutus"><i className="bi bi-basket3-fill"></i>&nbsp;Market</Link>
                  </li>
                  <li className="nav-item">
                    <Link className=" offcanvasLinks darkgreen mb-1 nav-link" to="/community"><i className="bi bi-chat-fill"></i>&nbsp;Community</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="offcanvasLinks darkgreen  mb-1  nav-link" to="contact"><i className="bi bi-layout-text-window-reverse"></i>&nbsp;Dashboard</Link>
                  </li>

                  <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <Link className=" text-success nav-link" to="/aboutus">
                          <i className="bi bi-info-circle-fill"></i>&nbsp;About us
                        </Link>
                      </li>

                      <li className="dropdown-item">
                        <Link className=" text-success nav-link" to="/services">
                          {" "}
                          <i className="bi bi-gear-wide-connected"></i>&nbsp;Services
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link className=" text-success nav-link" to="/contactus">
                          <i className="bi bi-telephone-fill"></i>&nbsp;Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div> :
                <div className='col-12 mt-2 mb-5 ' >
                  <ul className="nav d-flex flex-column">
                    <li className="nav-item ">
                      <Link className="offcanvasLinks  darkgreen mb-1 nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill"></i>&nbsp;Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="offcanvasLinks darkgreen mb-1  nav-link" to="/aboutus"><i className="bi bi-info-circle-fill"></i>&nbsp;About us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className=" offcanvasLinks darkgreen mb-1 nav-link" to="/services"> <i className="bi bi-gear-wide-connected"></i>&nbsp;Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="offcanvasLinks darkgreen  mb-1  nav-link" to="/contactus"><i className="bi bi-telephone-fill"></i>&nbsp;Contact</Link>
                    </li>
                  </ul>
                </div>
            }
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

function DashboardCanvas() {
  return (
    <>

      <DashoffCanvas key={1} placement={"end"} name={"end"} />

    </>
  );
}

export default DashboardCanvas;