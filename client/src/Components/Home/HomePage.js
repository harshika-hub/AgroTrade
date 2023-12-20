import HeadSlider from '../HeadSilder/HeadSlider.js'
import HomeServices from '../HomeServicesSection/Services.js';
import AboutUs from '../HomeAboutUsSection/Aboutus.js';
import Statistics from '../HomeStatastics/Statistics.js';
import Grains from '../HomeGrainsSection/Grains.js';
import LandsSection from '../HomeLandsSection/LandsSection.js';
import EquipmentsSection from '../HomeEqupimentsSection/EquipmentSection.js';
import { useDispatch } from 'react-redux';
import { jwtVerification } from '../../store/commonSlice.js';




function Home() {
    const dispatch = useDispatch();
    (() => {
        // Function to get the value of a cookie by its name
        
        // dispatch(jwtVerification({"token":token}));
        dispatch(jwtVerification({}));
    })();
    return (
        <>
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