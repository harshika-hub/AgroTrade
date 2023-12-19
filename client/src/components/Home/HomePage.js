import HeadSlider from '../HeadSilder/HeadSlider.js'
import HomeServices from '../HomeServicesSection/Services.js';
import Aboutus from '../HomeAboutUsSection/Aboutus.js';
import Statistics from '../HomeStatastics/Statistics.js';
import Grains from '../HomeGrainsSection/Grains.js';
import EquipmentsSection from '../HomeEqupimentsSection/EquipmentSection.js';




function Home(){
  return(
    <>
    <HeadSlider />
      <HomeServices/>
      <Aboutus/>
      <Statistics />
      <Grains />
      <Grains />
      <EquipmentsSection /> 
  </>);
};
export default Home;