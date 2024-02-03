import Header from "../OrgHeader/Header.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { LandMarket, storageMarket } from "../../store/marketSlice.js";

import jscookie from "js-cookie"
function OrgHome(){

  // const [agriLands, setAgriland] = useState([]);
  // const [storages, setStorage] = useState([]);
  // const dispatch=useDispatch();

  // const getLand = async (token) => {
  //   const agriLand = await dispatch(LandMarket(token));
  //   console.log('agriLand in component', agriLand.payload);
  //   setAgriland(agriLand.payload);
  // }

  // useEffect(()=>{
  //   const token = jscookie.get('token')
  //   getLand(token);
  // },[])

  

 
  // const getStorage = async (token) => {
  //   const storage = await dispatch(storageMarket(token));
  //   console.log('storage in component', storage.payload);
  //   setStorage(storage.payload);

  // }
  // useEffect(()=>{
  //   const token = jscookie.get('token')
    

  //   getStorage(token)
  

  // },[])
 return(<>
   <Header/>
   <div>
   {/* <Outlet context={{agriLands,storages}} /> */}
   <Outlet context={"hello"} />
   </div>
  
 </>)
}
export default OrgHome;