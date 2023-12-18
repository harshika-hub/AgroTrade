import "./header.css";
import UserSingUpModal from "../UserSignUpModal/UserSingUpModal.js";
import UserSinginModal from "../UserSigninModal/userSigninModal.js";
import OrgSinginModal from "../OrgSigninModal/OrgSigninModal.js";
function Nablinks() {
  return (
    <>
      <div
        id="nacLinksdiv"
        className="bg-darkgreen d-felx   aling-items-center"
      >
        <div className="row m-0">
          <div className="col-md-8 offset-1">



            {
              false ? <ul id="navLinkul" className="nav d-felx justify-content-around aling-items-center" >
                <li className="nav-item ">
                  <a
                    className=" text-white nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    <i className="bi bi-house-fill"></i>&nbsp;Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="/aboutus">
                    <i class="bi bi-basket3-fill"></i>&nbsp;Market
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="services">
                    {" "}
                    <i class="bi bi-chat-fill"></i>&nbsp;Community
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="contact">
                    <i class="bi bi-layout-text-window-reverse"></i>&nbsp;Dashboard
                  </a>
                </li>
                <div className="btn-group nav-item">
                  <a className=" text-white nav-link dropdown-toggle" style={{ fontSize: "20px" }} data-bs-toggle="dropdown" href="contact">
                    &nbsp;More
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a className=" text-success nav-link" href="/aboutus">
                        <i className="bi bi-info-circle-fill"></i>&nbsp;About us
                      </a>
                    </li>

                    <li className="dropdown-item">
                      <a className=" text-success nav-link" href="services">
                        {" "}
                        <i className="bi bi-gear-wide-connected"></i>&nbsp;Services
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className=" text-success nav-link" href="contact">
                        <i className="bi bi-telephone-fill"></i>&nbsp;Contact
                      </a>
                    </li>


                  </ul>
                </div>
              </ul> : <ul id="navLinkul" className="nav d-felx justify-content-around aling-items-center" >
                <li className="nav-item ">
                  <a
                    className=" text-white nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    <i className="bi bi-house-fill"></i>&nbsp;Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="/aboutus">
                    <i className="bi bi-info-circle-fill"></i>&nbsp;About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="services">
                    {" "}
                    <i className="bi bi-gear-wide-connected"></i>&nbsp;Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" text-white nav-link" href="contact">
                    <i className="bi bi-telephone-fill"></i>&nbsp;Contact
                  </a>
                </li>
              </ul>
            }

          </div>

          <div className=" offset-1 col-2 order-last d-flex justify-content-around ">



            {
              false ? <button type="Button" className="btn btn-danger">Log Out&nbsp;<i class="bi bi-box-arrow-right"></i></button> :
                <>
                  <div className="dropdown m-0">
                    <a
                      className="btn linksbtn btn-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign In&nbsp;<i className="bi bi-box-arrow-in-right"></i>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="#">
                          <UserSinginModal />
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <OrgSinginModal />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown m-0">
                    <a
                      className="btn linksbtn btn-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign Up&nbsp;<i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="#">
                          <UserSingUpModal />
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
                        </a>
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