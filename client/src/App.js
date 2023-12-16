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
function App() {
  return (
    <>
      <Header />
      <HeadSlider />
      <Services />
      <Aboutus />
      <Statistics />
      <Grains />
      <LandsSection />
      <EquipmentsSection />
      {/* <OrgSingupComponent/> */}
      <Footer/>

    </>
  );
}

export default App;
