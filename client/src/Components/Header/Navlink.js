import './header.css'
import UserSingUpModal from '../UserSignUpModal/UserSingUpModal';

function Nablinks() {
  return (<>
    <div id='nacLinksdiv' className='bg-darkgreen d-felx   aling-items-center'>
      <div className='row m-0' >
        <div className='col-md-8 offset-1' >
          <ul id='navLinkul' className="nav d-felx justify-content-around aling-items-center">
            <li className="nav-item ">
              <a className=" text-white nav-link active" aria-current="page" href="/home"><i className="bi bi-house-fill"></i>&nbsp;Home</a>
            </li>
            <li className="nav-item">
              <a className=" text-white nav-link" href="/aboutus"><i className="bi bi-info-circle-fill"></i>&nbsp;About us</a>
            </li>
            <li className="nav-item">
              <a className=" text-white nav-link" href="services"> <i className="bi bi-gear-wide-connected"></i>&nbsp;Services</a>
            </li>
            <li className="nav-item">
              <a className=" text-white nav-link" href="contact"><i className="bi bi-telephone-fill"></i>&nbsp;Contact</a>
            </li>

          </ul>
        </div>

        <div className=' offset-1 col-2 order-last d-flex justify-content-around ' >
          <div className="dropdown m-0">
            <a className="btn linksbtn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Sign In&nbsp;<i className="bi bi-box-arrow-in-right"></i>
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#"><i class="bi bi-person-circle"></i>&nbsp;User</a></li>
              <li><a className="dropdown-item" href="#"><i class="bi bi-people-fill"></i>&nbsp;Orgnisation</a></li>
            </ul>
          </div>
          <div className="dropdown m-0">
            <a className="btn linksbtn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Sign Up&nbsp;<i className="fa-solid fa-pen-to-square"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#"><UserSingUpModal /></a></li>
              <li><a className="dropdown-item" href="#"><i class="bi bi-people-fill"></i>&nbsp;Orgnisation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default Nablinks;