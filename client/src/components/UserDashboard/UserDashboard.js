import "./UserDashboard.css";
import logo from "../../assets/Agro-Trade-logo.png"
import Profile from "./ProfileSection/ProfileSection.js";
import DashboardLinks from "../DashboardLinks/DashboardLinks.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {io} from 'socket.io-client';
import { useEffect, useState } from "react";
import ExpertModal from "../BecomeExpertModal/ExpertModal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import jscookie from 'js-cookie'
import { getDataonLoad } from "../../store/userSlice";

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

function UserdashBoard() {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const [userData,setUserData]=useState({})

  const [socket,setSocket]=useState(null);
  const status=useSelector(state=>state.commonSlice);
  const expertStatus=status.expert;
  const userStatus=status.user;
  console.log("expert status in dashboard",String(expertStatus));
  const dispatch =useDispatch()
  var user=useSelector(state=>state.userSlice.userData);
      console.log("inside dashboard",user)
      var statu=""
  useEffect(()=>{
    setSocket(io('http://127.0.0.1:3000'));
   if(user.userData==null){
          const email=jscookie.get("userEmail")
          const token=jscookie.get("token")
          dispatch(getDataonLoad({email,token}))
        setUserData({...user});
        }

  },[dispatch]);
  const checUser=(route)=>{
    console.log("route inside checkuser",String(route))
    if(!user.user_status){
    alert("Please complete your profiile first.")
    navigate("/dashboard/profile")
    }else if(route=="/dashboard/chat")
    {
      navigate("/dashboard/chat");
      console.log("inside chat check",route)
    }else if(route=="/dashboard/listedGrain")
    {
      navigate("/dashboard/listedGrain");
      console.log("inside chat check",route)
    }else if(route=="/dashboard/listedEquipment")
    {
      navigate("/dashboard/listedequipment");
      console.log("inside chat check",route)
    }
  // }else{
  //   navigate(String(route));
  //   console.log("route inside checkuser",String(route));
  // }

  }
    console.log("sjdccuswdyuvwge");
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
            <Link to="/dashboard/profile" className="nav-item nav-link  active  ">
              <i className="bi bi-person-circle text-center"></i>&nbsp;Profile
              </Link>
              <Link onClick={()=>checUser("/dashboard/chat")} className="nav-item nav-link ">
                <i className="fa fa-th me-2 text-success"></i>&nbsp;Chat
              </Link> 
              <Link onClick={()=>checUser("/dashboard/listedGrain")}  className="nav-item nav-link ">
                <i className="fa fa-th me-2 text-success"></i>&nbsp;Listed Grains
              </Link>
              <a onClick={()=>checUser("/dashboard/listedEquipment")} className="nav-item nav-link ">
              <i className="fa-solid fa-tractor text-success"></i>&nbsp;Listed Equipments
              </a>
              <a onClick={()=>checUser("/dashboard/agricultureLand")} className="nav-item nav-link">
              <i className="fa-solid fa-building-wheat text-success"></i>&nbsp;Agriculture Land
              </a>
              <a onClick={()=>checUser("/dashboard/coldStorage")} className="nav-item nav-link ">
              <i className="fa-solid fa-warehouse text-success"></i>&nbsp;Cold Storage Land
              </a>
              <a onClick={()=>checUser("/dashboard/grainOrder")} className="nav-item nav-link ">
              <i className="fa-solid fa-wheat-awn text-success"></i>&nbsp;Grain Orders
              </a>
              <a onClick={()=>checUser("/dashboard/equipmentOrder")} className="nav-item nav-link ">
                <i className="bi bi-wrench-adjustable-circle-fill text-success"></i>&nbsp;Equipment Orders
              </a>

              {
                !expertStatus&&userStatus?<Button  onClick={() => setShow(true)} className="nav-item nav-link">
                <i className="bi bi-layout-text-window-reverse text-success"></i>&nbsp;
                        Become Expert
                </Button>:""
              }
              
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
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
        
        <div className="content " id="content" style={{display:"flex",flexDirection:"column"}}>
        <DashboardLinks/>
        {/* <DashboardLinks/> */}


<ExpertModal setShow={setShow} show={show}/>
{/* --------------------------------Div to be nvigate----------------------------- */}
          <div className="container-fluid p-0 " style={{flexGrow:1}}>
            {/* <div className="row"> */}
              {/* <Profile/> */}
              <Outlet context={{socket,user}} />
              
            {/* </div> */}
          </div>
{/* --------------------------------Div to be nvigate ends ----------------------------- */}
        </div>
      </div>
    </>
  );
}

export default UserdashBoard;