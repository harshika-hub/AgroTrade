// import './App.css';
import Header from './Components/Header/header.js';
import HeadSlider from './Components/HeadSilder/HeadSlider.js';
import HomeServices from './Components/HomeServicesSection/Services.js';
import Aboutus from './Components/HomeAboutUsSection/Aboutus.js';
import Statistics from './Components/HomeStatastics/Statistics.js';
import Grains from './Components/HomeGrainsSection/Grains.js';
import LandsSection from './Components/HomeLandsSection/LandsSection.js';
import EquipmentsSection from './Components/HomeEqupimentsSection/EquipmentSection.js';
import OrgSingupComponent from './Components/OrgSignUpComponent/OrgSignup.js';
import Footer from './Components/Footer/Footer.js';
import Services from './Components/ServicesPage/ServicesPage.js';
import contactUs from './Components/ContactUsPage/ContactUs.js';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<ServicesPage/>}>

        </Route>
      </Routes> */}
      {/* <HeadSlider />
      <Services />
      <Aboutus />
      <Statistics />
      <Grains />
      <LandsSection />
      <EquipmentsSection /> */}
      <OrgSingupComponent/>
      {/* <ServicesPage/> */}
      {/* <ContactUsComponent/> */}
      <Footer/>

    </>
  );
}

export default App;
