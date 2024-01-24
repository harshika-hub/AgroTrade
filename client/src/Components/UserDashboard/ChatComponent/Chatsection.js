import "./ChatSection.css";
import RecivedMessage from "./RecivedMessage";
import Sentmessage from "./Sentmessage";
import MessagesSection from "./messages";
import ChatListitem from "./ChatListitem";
import {useEffect, useRef,useState} from "react";
import {findChat } from "../../../store/chatSlice";
import { io } from "socket.io-client";
import jscookie from "js-cookie";
function Chatsection() {
  // const params = useParams();
  // const socket = useRef();
  // const userEmail = jscookie.get("userEmail");
  // const [newmessage, setMessage] = useState("hello aarti");
  // const [sendNewMessage, setSendMessage] = useState(null);
  // const [reciveMessage, setReciveMessage] = useState(null);
  // const [OnlineUsers, setOnlineUsers] = useState([]);
  // var [allMessages, SetAllMessages] = useState([]);
  // const [typingStatus,setTypingStatus] =useState("Online")
  var [chats,setChats]=useState([])
  var [activeChat,setActiveChat]=useState({})
 
  
  useEffect(()=>{
    const currentUserId=jscookie.get("userEmail");
    console.log("currentUserId"+currentUserId);

    findChat(currentUserId).then((data)=>{
          // console.log("inside primise",data);
          chats=data;
          // console.log("This are the chats ",chats);
          setChats(data)
     })
  },[])

  function openChat(chat,i,reciverObj) {
   var Chatdetail=chats[i]
    activeChat={reciverObj:reciverObj,Chatdetail:Chatdetail}
    setActiveChat(activeChat)
    console.log("This is the active chats",activeChat);

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
              chats.map((chat,i)=>{
                 return( <ChatListitem key={i} chat={chat} index={i}  openChat={openChat} />
                 )
              })

            }
       
          </div>
        </div>
        <div className="col-md-6 col-lg-7 col-xl-8  h-100 p-0 bg-black">
          <MessagesSection activeChat={activeChat}  />
      
        </div>
      </div>
    </>
  );
}

export default Chatsection;
