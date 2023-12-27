import "./Dashboard.css";
import logo from "../../assets/Agro-Trade-logo.png"
import Profile from "./ProfileSection/ProfileSection.js";
import DashboardLinks from './DashboardLinks/DashboardLinks.js';
import { Link, Outlet } from "react-router-dom";
<link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" /> 
  // var show=false;
  // function silderBarToggle(params) {
  //   var  sliderBar=document.getElementById("siderBar");
  //   var content =document.getElementById("content")
  //   if (show) {
  //     sliderBar.classList.remove("open")  
  //     content.classList.remove("open")
  //     show=false;
  //   }
  //   else{
  //     sliderBar.classList.add("open")
  //     content.classList.add("open")
  //     show=true;
  //   }
  // }

function DashBoard() {
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
              
              <Link to="/dashboard/profile" className="nav-item nav-link">
                <i class="bi bi-person-circle text-success"></i>&nbsp;Profile
              </Link>  
              
              <Link to="/dashboard/chats" className="nav-item nav-link">
                <i class="fa-brands fa-rocketchat text-success"></i>&nbsp;Chats
              </Link>  
              
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-th me-2 text-success"></i>&nbsp;Listed items
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="/dashboard/grains" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-wheat-awn text-white"></i>&nbsp;Grains
                  </Link>
                  <Link to="/dashboard/equipments" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-tractor text-white"></i>&nbsp;Equipments
                  </Link>
                  <Link to="/dashboard/agriculturelands" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-building-wheat text-white"></i>&nbsp;Agriculture Land
                  </Link>
                  <Link to="/dashboard/coldstoragelands" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-warehouse text-white"></i>&nbsp;Cold Storage Land
                  </Link>
                </div>
              </div> 

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-wheat-awn text-success"></i>&nbsp;Grain Orders
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Orders
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order History
                  </Link>
                </div>
              </div> 
              
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-tractor text-success"></i>&nbsp;Equipment Bookings
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Bookings
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking History
                  </Link>
                </div>
              </div>              
              
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i className="far fa-file-alt me-2 text-success "></i>Agri Agreements
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agreement requests
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current agreements
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agreements history
                  </Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i className="far fa-file-alt me-2 text-success "></i>Cold St. Agreements
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agreement requests
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current agreements
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agreements history
                  </Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  <i class="bi bi-layout-text-window-reverse text-success"></i>&nbsp;Expert Dashboard
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meeting Requests
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comming Schedules
                  </Link>
                  <Link to="" className="dropdown-item text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meeting History
                  </Link>
                </div>
              </div>


            </div>
          </nav>
        </div>
        
        <div className="content " id="content" style={{display:"flex",flexDirection:"column"}}>
        <DashboardLinks/>



{/* --------------------------------Div to be nvigate----------------------------- */}
          <div className="container-fluid p-0 " style={{flexGrow:1}}>
            <div className="row">
              <Outlet/>
            </div>
          </div>
{/* --------------------------------Div to be nvigate ends ----------------------------- */}
        </div>
      </div>
    </>
  );
}

export default DashBoard;