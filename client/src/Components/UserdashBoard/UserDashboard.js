import "./UserDashboard.css";
import logo from "../../assets/Agro-Trade-logo.png"
import Profile from "./ProfileSection.js";
<link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
  var show=false;
  function silderBarToggle(params) {
    var  sliderBar=document.getElementById("siderBar");
    var content =document.getElementById("content")
    if (show) {
      sliderBar.classList.remove("open")  
      content.classList.remove("open")
      show=false;
    }
    else{
      sliderBar.classList.add("open")
      content.classList.add("open")
      show=true;
    }


  }
function UserdashBoard() {
  return (
    <>
      <div className="container-fluid position-relative d-flex p-0 ">
        <div className="sidebar" id="siderBar">
          <nav className="navbar navbar-light pe-2">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="midgreen text-center ">
                Agro Trade
              </h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img className="rounded-circle" alt="" src={logo}  style={{ width: "60px" }} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0 text-white">Vikas Joshi</h6>
                <span className=" text-white" >User</span>
              </div>
            </div>
            <div className="navbar-nav w-100 ">
              <a href="index.html" className="nav-item nav-link  active  ">
              <i class="bi bi-person-circle text-center"></i>&nbsp;Profile
              </a>  
              <a href="widget.html" className="nav-item nav-link ">
                <i className="fa fa-th me-2 text-success"></i>&nbsp;Listed Grains
              </a>
              <a href="widget.html" className="nav-item nav-link ">
              <i class="fa-solid fa-tractor text-success"></i>&nbsp;Listed Equipments
              </a>
              <a href="form.html" className="nav-item nav-link">
              <i class="fa-solid fa-building-wheat text-success"></i>&nbsp;Agriculture Land
              </a>
              <a href="table.html" className="nav-item nav-link ">
              <i class="fa-solid fa-warehouse text-success"></i>&nbsp;Cold Storage Land
              </a>
              <a href="chart.html" className="nav-item nav-link ">
              <i class="fa-solid fa-wheat-awn text-success"></i>&nbsp;Grain Orders
              </a>
              <a href="chart.html" className="nav-item nav-link ">
                <i className="bi bi-wrench-adjustable-circle-fill text-success"></i>&nbsp;Equipment Orders
              </a>
              <a href="chart.html" className="nav-item nav-link ">
              <i class="bi bi-layout-text-window-reverse text-success"></i>&nbsp;Expert Dashboard
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i className="far fa-file-alt me-2 text-success "></i>Agreements
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="signin.html" className="dropdown-item text-white">
                    Agriculture agreements
                  </a>
                  <a href="signup.html" className="dropdown-item text-white">
                    Cold Sotrage agreements
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="content " id="content">
          <nav className="navbar navbar-expand bg-darkgreen sticky-top px-4 py-0">
            <a href="#" className="sidebar-toggler text-decoration-none flex-shrink-0" id="sidebar-toggler" onClick={silderBarToggle}>
            <i class="fa-solid fa-bars midgreen"></i>
            </a>
            <form className="d-none d-md-flex ms-4">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search"
              />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  style={{fontSize:"16px"}}
                >
                  <i className="fa fa-envelope me-lg-2 midgreen"></i>
                  <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src={logo}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />

                  <a href="#" className="dropdown-item text-center">
                    See all message
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle  text-white"
                  data-bs-toggle="dropdown"
                  style={{fontSize:"16px"}}
                >
                  <i className="fa fa-bell me-lg-2 midgreen "></i>
                  <span className="d-none d-lg-inline-flex">Notification</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <h6 className=" mb-0">Profile updated</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className=" mb-0">New user added</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="mb-0">Password changed</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all notifications
                  </a>
                </div>
              </div>

              <div className="nav-item ">
                 <button type="button" className="btn btn-outline-danger btn-sm ms-4">Log Out</button>
              </div>
            


            </div>
       </nav>



{/* --------------------------------Div to be nvigate----------------------------- */}
          <div className="container-fluid pt-4 px-4 bg-secondary">
            {/* <div className="row"> */}
              <Profile/>
              
            {/* </div> */}
          </div>
{/* --------------------------------Div to be nvigate ends ----------------------------- */}
        </div>
      </div>
    </>
  );
}

export default UserdashBoard;