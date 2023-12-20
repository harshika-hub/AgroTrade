// import './App.css';
import Header from './components/Header/header.js';
import OrgSingup from './components/OrgSignUpComponent/OrgSignup.js';
import Footer from './components/Footer/Footer.js';
import Services from './components/ServicesPage/ServicesPage.js';
import contactUs from './components/ContactUsPage/ContactUs.js';
import Home from './components/Home/HomePage.js';
import AboutUs from './components/AboutUsPage/AboutUs.js';
import ContactUs from './components/ContactUsPage/ContactUs.js';
import UserDashboard from './components/UserDashboard/UserDashboard.js';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <UserDashboard/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/orgSignup' element={<OrgSingup/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
        </Routes>
      <Footer/>

    </>
  );
}

export default App;
