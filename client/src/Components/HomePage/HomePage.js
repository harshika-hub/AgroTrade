import HeadSlider from '../HeadSilder/HeadSlider.js';
import Services from '../ServicesSection/Services.js'
import Aboutus from '../AboutUs/Aboutus.js'
import Statistics from '../Statastics/Statistics.js'
import Grain from '../Grains/Grains.js'
import LandsSection from '../LandsSection/LandsSection.js'
import EquipmentsSection from '../EqupimentsSection/EquipmentSection.js'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';




export function HomePage(){
  // const location=useLocation();

  return(
    <>
    <HeadSlider />
      <Services/>
      <Aboutus/>
      <Statistics />
      <LandsSection />
      <Grain/>
      <EquipmentsSection /> 
  </>
  )
  
  


}