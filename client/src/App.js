// import './App.css';
import Header from './Components/Header/header';
import HeadSlider from './Components//HeadSilder/HeadSlider';
import Services from './Components/ServicesSection/Services';
import Aboutus from './Components/AboutUs/Aboutus';
import Statistics from './Components/Statastics/Statistics';
import Grains from './Components/Grains/Grains';
import LandsSection from './Components/LandsSection/LandsSection';
import EquipmentsSection from './Components/EqupimentsSection/EquipmentSection';
import OrgSingupComponent from './Components/OrgSignUpComponent/OrgSignup'
import Footer from './Components/Footer/Footer';
import AboutUsComponent from './Components/AboutUsPageComponent/AboutUsComponent';
import { Routes,Route } from 'react-router-dom';
import AddColdStorageLand from './Components/AddLand/AddColdStorageLand';
import AddAgricultureLand from './Components/AddLand/AddAgricultureLand';
import AddGrain from './Components/AddLand/AddGrain';
import AddEquipment from './Components/AddLand/AddEquipment';
import Add from './Components/AddLand/Add';

function App() {
  return (
    <>
       <Header /> 
        {/* <HeadSlider /> 
       <Services />
       <Aboutus /> 
       <Statistics /> 
       <Grains /> 
       <LandsSection /> 
       <EquipmentsSection />    */}
       {/* <OrgSingupComponent/>   */}
      {/* <AboutUsComponent/> */}
      <AddColdStorageLand/>
      <AddAgricultureLand/>
      <AddGrain/>
      <AddEquipment/>
      {/* <Add/> */}


    
      <Footer/>
      
      {/* <Routes> 
        <Route path="/aboutus" element={<AboutUsComponent/>}></Route> 
        {/* <Route path="servicepage" element={<Ser/>}></Route> */}
       {/* </Routes>  */}

      
     

    </>
  );
}

export default App;
