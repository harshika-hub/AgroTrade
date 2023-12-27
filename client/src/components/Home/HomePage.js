import HeadSlider from '../HeadSilder/HeadSlider.js'
import HomeServices from '../HomeServicesSection/Services.js';
import AboutUs from '../HomeAboutUsSection/Aboutus.js';
import Statistics from '../HomeStatastics/Statistics.js';
import Grains from '../HomeGrainsSection/Grains.js';
import LandsSection from '../HomeLandsSection/LandsSection.js';
import EquipmentsSection from '../HomeEqupimentsSection/EquipmentSection.js';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header.js';
import { useEffect } from 'react';
import { authorize } from '../../store/auth/auth.js';
import Footer from '../Footer/Footer.js';
import { temp } from '../../store/userSlice.js';




function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        authorize(dispatch);
        temp();
    },[]);
    return (
        <>
            <Header/>
            <HeadSlider />
            <HomeServices />
            <AboutUs />
            <Statistics />
            <Grains />
            <LandsSection />
            <EquipmentsSection />
            <Footer/>
        </>);
};
export default Home;