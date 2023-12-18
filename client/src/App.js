// import './App.css';
import Header from './Components/Header/header';
import OrgSingupComponent from './Components/OrgSignUpComponent/OrgSignup'
import { HomePage } from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import { ServicesPage } from './Components/ServicesPageComponent/ServicesPage';
import { Routes,Route } from 'react-router-dom';
import ContactUsComponent from './Components/ContactusPageComponent/ContactUs.js';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/services' element={<ServicesPage/>}></Route>
        <Route path='/orgSignup' element={<OrgSingupComponent/>}></Route>
        <Route path='/contactus' element={<ContactUsComponent/>}></Route>
        <Route path='/community' element={<ContactUsComponent/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
