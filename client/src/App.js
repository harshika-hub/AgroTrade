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
// import Chatsection from './Components/ChatComponent/Chatsection.js';
import Chatsection from './Components/UserDashboard/ChatComponent/Chatsection.js'
import { Routes, Route } from 'react-router-dom'
import Profile from './Components/UserDashboard/ProfileSection/ProfileSection.js';
import ListedGrains from './Components/UserDashboard/ListedGrain/ListedGrains.js';
import ListedEquipments from './Components/UserDashboard/ListedEquimentsSection/ListedEquiments.js';
import AgricultureLand from './Components/UserDashboard/AgricultureLands Section/AgricultureLand.js';
import ColdStorageLand from './Components/UserDashboard/ColdStorageLandSection.js/ColdStorageLand.js';
import Market from './Components/Market/Market.js';
import MarketPlace from './Components/Market/MarketPlace.js';
import { GrainMarketCard } from './Components/Market/GrainMarket/GrainMarket.js';
import { FarmLandMarketCard } from './Components/Market/FarmLandMarket/FarmLandMarket.js';
import { StorageMarketCard } from './Components/Market/StorageMarket/StorageMarket.js';
import { EquipmentMarketCard } from './Components/Market/EquipmentMarket/EquipmentMarket.js';
import Cart from './Components/Market/Cart/Cart.js';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.js';
import AdminLogin from './Components/AdminDashboard/AdminLogin/AdminLogin.js';
import ExpertListView from './Components/AdminDashboard/ExpertList/ExpertList.js';
import OrganizationList from './Components/AdminDashboard/OrganizationList/OrganizationList.js';
import UserList from './Components/AdminDashboard/UserList/UserList.js';
import OrderedGrains from './Components/AdminDashboard/Grains/OrderedGrains/OrderedGrains.js'
import ListedGrainsAd from './Components/AdminDashboard/Grains/ListedGrainsAd/ListedGrainsAd.js'
import ListedEquipmentsAd from './Components/AdminDashboard/Equipments/ListedEquipmentsAd/ListedEquipmentsAd.js'
import OrderedEquipments from './Components/AdminDashboard/Equipments/OrderedEquipments/OrderedEquipments.js';
import ListedFarmingLand from './Components/AdminDashboard/FarmingLand/ListedFarmingLand/ListedFarmingLand.js';
import ContactFarmingLand from './Components/AdminDashboard/FarmingLand/ContractFarmingLand/ContractFarmingLand.js'
import ContractColdStLand from './Components/AdminDashboard/ColdStLand/ContractColdStLand/ContractColdStLand.js'
import ListedColdStLand from './Components/AdminDashboard/ColdStLand/ListedColdStLand/ListedColdStLand.js';
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
          <Route path='listedEquipments' element={<ListedEquipments />}></Route>
          <Route path='agricultureLands' element={<AgricultureLand />}></Route>
          <Route path='coldStorageLand' element={<ColdStorageLand />}></Route>
        </Route>

        <Route path='/adminLogin' Component={AdminLogin} ></Route>
        <Route path='/adminDashboard' Component={AdminDashboard} ></Route>

        <Route path='/market' Component={MarketPlace}>
          <Route index element={<Market />} ></Route>
          <Route path="grainMarket" element={<GrainMarketCard />} ></Route>
          <Route path="agriLandMarket" element={<FarmLandMarketCard />} ></Route>
          <Route path="storageMarket" element={<StorageMarketCard />} ></Route>
          <Route path="equipmentMarket" element={<EquipmentMarketCard />} ></Route>
          <Route path="cartMarket" element={<Cart />} ></Route>
        </Route>

        <Route path='/adminLogin' Component={AdminLogin} ></Route>
        <Route path='/adminDashboard' Component={AdminDashboard} >
          <Route path="expertList" element={<ExpertListView />} />
          <Route path='organizationList' element={<OrganizationList />}></Route>
          <Route path='userList' element={<UserList />}></Route>
          <Route path='listedGrainsAd' element={<ListedGrainsAd />}></Route>
          <Route path='orderedGrains' element={<OrderedGrains />}></Route>
          <Route path='listedEquipmentsAd' element={<ListedEquipmentsAd />}></Route>
          <Route path='orderedEquipments' element={<OrderedEquipments />}></Route>
          <Route path='listedFarmingLand' element={<ListedFarmingLand />}></Route>
          <Route path='contactFarmingLand' element={<ContactFarmingLand />}></Route>
          <Route path='listedColdStLand' element={<ListedColdStLand />}></Route>
          <Route path='contractColdStLand' element={<ContractColdStLand />}></Route>
        </Route>

      </Routes>
      {/* <Footer/> */}

    </>
  );
}

export default App;
