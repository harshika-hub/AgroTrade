import "./header.css";
import UserSingUpModal from "../UserSignUpModal/UserSingUpModal.js";
import UserSinginModal from "../UserSigninModal/userSigninModal.js";
import OrgSinginModal from "../OrgSigninModal/OrgSigninModal.js";
import { Link } from "react-router-dom";
function Nablinks() {
  return (
    <>
      <div
        id="nacLinksdiv"
        className="bg-darkgreen d-felx aling-items-center"
      >
        <div className="row m-0">
          <div className="col-md-8 offset-1">



            {
              false ? <ul id="navLinkul" className="nav d-felx justify-content-around aling-items-center" >
                <li className="nav-item ">

                  <Link to='/' className=" text-white nav-link">
                    <i className="bi bi-house-fill"></i>&nbsp;Home
                  </Link>

                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/aboutus">
                    <i class="bi bi-basket3-fill"></i>&nbsp;Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/services">
                    {" "}
                    <i class="bi bi-chat-fill"></i>&nbsp;Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/contactus">
                    <i class="bi bi-layout-text-window-reverse"></i>&nbsp;Dashboard
                  </Link>
                </li>
                <div className="btn-group nav-item">
                  <Link className=" text-white nav-link dropdown-toggle" style={{ fontSize: "20px" }} data-bs-toggle="dropdown" to="contact">
                    &nbsp;More
                  </Link>
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
              </ul> : <ul id="navLinkul" className="nav d-felx justify-content-around aling-items-center" >
                <li className="nav-item ">
                  <Link
                    className=" text-white nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    <i className="bi bi-house-fill"></i>&nbsp;Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/aboutus">
                    <i className="bi bi-info-circle-fill"></i>&nbsp;About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/services">
                    {" "}
                    <i className="bi bi-gear-wide-connected"></i>&nbsp;Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" text-white nav-link" to="/contactus">
                    <i className="bi bi-telephone-fill"></i>&nbsp;Contact
                  </Link>
                </li>
              </ul>
            }
          </div>

          <div className=" offset-1 col-2 order-last d-flex justify-content-around ">



            {
              false ? <button type="Button" className="btn btn-danger">Log Out&nbsp;<i class="bi bi-box-arrow-right"></i></button> :
                <>
                  <div className="dropdown m-0">
                    <Link
                      className="btn linksbtn btn-warning dropdown-toggle"
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign In&nbsp;<i className="bi bi-box-arrow-in-right"></i>
                    </Link>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" to="#">
                          <UserSinginModal />
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" to="#">
                          <OrgSinginModal />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown m-0">
                    <a
                      className="btn linksbtn btn-warning dropdown-toggle"
                      to="/orgSignup"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign Up&nbsp;<i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" to="#">
                          <UserSingUpModal />
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/orgSignup">
                          <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
                        </Link>
                      </li>
                    </ul>
                  </div>


                </>
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default Nablinks;