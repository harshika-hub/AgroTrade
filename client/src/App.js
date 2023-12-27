import OrgSingUp from './components/OrgSignUp/OrgSignUp.js';
import Services from './components/ServicesPage/ServicesPage.js';
import Home from './components/Home/HomePage.js';
import AboutUs from './components/AboutUsPage/AboutUs.js';
import ContactUs from './components/ContactUsPage/ContactUs.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import {Routes,Route} from 'react-router-dom';
import ProfileSection from './components/Dashboard/ProfileSection/ProfileSection.js';
import GrainsSection from './components/Dashboard/GrainsSection/GrainsSection.js';
import EquipmentsSection from './components/Dashboard/EquipmentsSection/EquipmentsSection.js';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/orgSignup' element={<OrgSingUp/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<ProfileSection />} />
          <Route path='profile' element={<ProfileSection />} />
          <Route path='grains' element={<GrainsSection />} />
          <Route path='equipments' element={<EquipmentsSection />} />
          {/* <Route path='chat' element={<Chatsection/>}></Route> */}
        </Route>
        <Route path='/community' element={<Dashboard/>}> </Route>
        <Route path='/market' element={<Dashboard/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
