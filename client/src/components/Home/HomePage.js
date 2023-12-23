import HeadSlider from '../HeadSilder/HeadSlider.js'
import HomeServices from '../HomeServicesSection/Services.js';
import AboutUs from '../HomeAboutUsSection/Aboutus.js';
import Statistics from '../HomeStatastics/Statistics.js';
import Grains from '../HomeGrainsSection/Grains.js';
import LandsSection from '../HomeLandsSection/LandsSection.js';
import EquipmentsSection from '../HomeEqupimentsSection/EquipmentSection.js';
import { useDispatch } from 'react-redux';
import { jwtVerification, setRoleStatus } from '../../store/commonSlice.js';
import { setUserData } from '../../store/userSlice.js';
import { setOrgData } from '../../store/organizationSlice.js';
import Header from '../Header/Header.js';
import { useEffect } from 'react';
import jscookie from 'js-cookie';
import { authorize } from '../../store/auth/auth.js';




function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        authorize(dispatch);
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
        </>);
};
export default Home;