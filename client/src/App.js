// import './App.css';
// import Header from './Components/Header/Header.js';
// import Footer from './Components/Footer/Footer.js';
// import contactUs from './Components/ContactUsPage/ContactUs.js';
// import { useEffect, useState } from 'react';

import OrgSingUp from './Components/OrgSignUp/OrgSignUp.js';
import Services from './Components/ServicesPage/ServicesPage.js';
import ExpertList from "./Components/ExpertList.js/ExpertList.js"

import Home from './Components/Home/HomePage.js';
import AboutUs from './Components/AboutUsPage/AboutUs.js';
import ContactUs from './Components/ContactUsPage/ContactUs.js';
import UserdashBoard from './Components/UserDashboard/UserDashboard.js';
import Chatsection from './Components/ChatComponent/Chatsection.js';
import { Routes, Route } from 'react-router-dom'
import Profile from './Components/UserDashboard/ProfileSection/ProfileSection.js';
import ListedGrains from './Components/UserDashboard/ListedGrain/ListedGrains.js';
import ListedEquipments from './Components/UserDashboard/ListedEquimentsSection/ListedEquiments.js';
import AgricultureLand from './Components/UserDashboard/AgricultureLands Section/AgricultureLand.js';
import ColdStorageLand from './Components/UserDashboard/ColdStorageLandSection.js/ColdStorageLand.js';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.js';
import AdminLogin from './Components/AdminDashboard/AdminLogin.js/AdminLogin.js'
import Market from './Components/Market/Market.js';
import MarketPlace from './Components/Market/MarketPlace.js';
function App() {
  // const [socket,setSocket]=useState(null);
  // useEffect(()=>{
  //   setSocket(io("http://localhost:3000"));
  // },[]);

  return (
    <>
      {/* <ExpertModal/> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/orgSignup' element={<OrgSingUp />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>

        <Route path='/bookExpert' element={<ExpertList />}></Route>
        <Route path='/dashboard' element={<UserdashBoard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path='chat' element={<Chatsection />}></Route>
          <Route path='listedGrain' element={<ListedGrains />}></Route>
          <Route path='listedEquipments' element={<ListedEquipments/>}></Route>
          <Route path='agricultureLands' element={<AgricultureLand/>}></Route>
          <Route path='coldStorageLand' element={<ColdStorageLand/>}></Route>

        </Route>
        <Route path='/adminLogin'Component={AdminLogin} ></Route>
        <Route path='/adminDashboard'Component={AdminDashboard} ></Route>
        <Route path='/market' Component={MarketPlace}>
        <Route index element={<Market />} />
          {/* <Route path="" element={<Profile />} /> */}

        </Route>

      </Routes>
      {/* <Footer/> */}

    </>
  );
}

export default App;
