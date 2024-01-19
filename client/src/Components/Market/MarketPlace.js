import { Outlet } from 'react-router-dom'
import NavLinks from '../Header/Navlink.js'
export default function MarketPlace(){
    return(<>
    <NavLinks/>
    <div className="container-fluid p-0 " style={{ flexGrow: 1 }}>
            <Outlet />
          </div>
    </>)
}