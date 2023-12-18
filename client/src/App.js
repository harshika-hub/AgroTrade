// import './App.css';
import Header from './components/Header/header.js';
import HeadSlider from './components/HeadSilder/HeadSlider.js';
import HomeServices from './components/HomeServicesSection/Services.js';
import Aboutus from './components/HomeAboutUsSection/Aboutus.js';
import Statistics from './components/HomeStatastics/Statistics.js';
import Grains from './components/HomeGrainsSection/Grains.js';
import LandsSection from './components/HomeLandsSection/LandsSection.js';
import EquipmentsSection from './components/HomeEqupimentsSection/EquipmentSection.js';
import OrgSingupComponent from './components/OrgSignUpComponent/OrgSignup.js';
import Footer from './components/Footer/Footer.js';
import Services from './components/ServicesPage/ServicesPage.js';
import contactUs from './components/ContactUsPage/ContactUs.js';
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
