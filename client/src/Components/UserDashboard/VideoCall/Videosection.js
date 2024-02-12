import "./VideoSection.css";
import { USER_REQUESTED_URL } from "../../../urls";

import Window from './Window.js'
import VideoListitem from "./VideoListitem.js";
import {useEffect, useRef,useState} from "react";
import jscookie from "js-cookie";
import axios from "axios";
function Chatsection() {
 
  const email = jscookie.get("userEmail");
  const token=jscookie.get('token');

  var [experts,setexperts]=useState([])
  var [activeVideo,setActiveVideo]=useState({})
  let [vstatus,setVstatus]=useState(false);
 
  
  useEffect(()=>{
    
    (async function findExpert()
    {
      const expert=await axios.get(USER_REQUESTED_URL+'/videoexpert/'+email+"/"+token);
      console.log("expert in video section",expert);
      if(expert.status===200)
      {
        setexperts([...expert.data.expertList])
      }

    })();

  },[])

  function openChat(i,exp) {
    console.log("inside open chat",exp);
setActiveVideo({...exp});
setVstatus(true)

  }
  return (
    <>
      <div
        className="row m-0 w-100 h-100"
        style={{ height: "auto", overflow: "hidden" }}
      >
        <div className="col-md-6 col-lg-5 col-xl-4 p-0  d-flex flex-column  parent  ">
          <div className="w-100 p-1 position-fixed-top child1">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search Chats"
              />
              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>
            </div>
          </div>
          <div id="chatsListsBox">
            {
              experts.map((expert,i)=>{
                 return( <VideoListitem key={i} expert={expert} index={i}  openChat={openChat}
                     />
                 )
              })  

            }
          </div>
        </div>
        <div className="col-md-6 col-lg-7 col-xl-8  h-100 p-0 bg-black">
          <Window activeVideo={activeVideo} status={vstatus}  />
        </div>
      </div>
    </>
  );
}

export default Chatsection;
