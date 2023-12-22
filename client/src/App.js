// import './App.css';
import Header from './components/Header/Header.js';
import OrgSingUp from './components/OrgSignUp/OrgSignUp.js';
import Footer from './components/Footer/Footer.js';
import Services from './components/ServicesPage/ServicesPage.js';
import contactUs from './components/ContactUsPage/ContactUs.js';
import Home from './components/Home/HomePage.js';
import AboutUs from './components/AboutUsPage/AboutUs.js';
import ContactUs from './components/ContactUsPage/ContactUs.js';
// import UserDashboard from './components/UserDashboard/UserDashboard.js';
import UserdashBoard from './components/UserDashboard/UserDashboard.js';
import ChatComponent from './components/ChatComponent/ChatComponent.js';

// import ExpertModal from './components/BecomeExpertModal/ExpertModal.js';
import {Routes,Route} from 'react-router-dom'
import Profile from './components/UserDashboard/ProfileSection/ProfileSection.js';
// import DashboardLinks from './components/DashboardLinks/DashboardLinks.js';

function App() {
  return (
    <>
    {/* <ExpertModal/> */}
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/orgSignup' element={<OrgSingUp/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/dashboard' element={<UserdashBoard/>}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path='chat' element={<ChatComponent/>}></Route>
          </Route>          
        </Routes>
      {/* <Footer/> */}

    </>
  );
}

export default App;
