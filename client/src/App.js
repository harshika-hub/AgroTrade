// import './App.css';
// import Header from './components/Header/Header.js';
// import Footer from './components/Footer/Footer.js';
// import contactUs from './components/ContactUsPage/ContactUs.js';
// import { useEffect, useState } from 'react';

import OrgSingUp from './components/OrgSignUp/OrgSignUp.js';
import Services from './components/ServicesPage/ServicesPage.js';
import ExpertList from "./components/ExpertList.js/ExpertList.js"
import Home from './components/Home/HomePage.js';
import AboutUs from './components/AboutUsPage/AboutUs.js';
import ContactUs from './components/ContactUsPage/ContactUs.js';
import UserdashBoard from './components/UserDashboard/UserDashboard.js';
import Chatsection from './components/ChatComponent/Chatsection.js';
import { Routes, Route } from 'react-router-dom'
import Profile from './components/UserDashboard/ProfileSection/ProfileSection.js';
import ListedGrains from './components/UserDashboard/ListedGrain/ListedGrains.js';
import ListedEquipments from './components/UserDashboard/ListedEquimentsSection/ListedEquiments.js';
import AgricultureLand from './components/UserDashboard/AgricultureLands Section/AgricultureLand.js';
import ColdStorageLand from './components/UserDashboard/ColdStorageLandSection.js/ColdStorageLand.js';
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
      </Routes>
      {/* <Footer/> */}

    </>
  );
}

export default App;
