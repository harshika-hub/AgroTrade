import "./ChatSection.css"
import RecivedMessage from "./RecivedMessage";
import Sentmessage from "./Sentmessage";
import ChatListitem from "./ChatListitem";
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
function Chatsection() {

  const params = useParams();
  const {socket}=useOutletContext();

  useEffect(() => {
      if(!socket) return
      socket.emit("join-room", { roomId: params.roomId })
      console.log("Params", params);
  }, [socket,params])

  function openFileExplorer() {
    document.getElementById('fileInput').click();
}
  return (
    <>
    <div className="row m-0 w-100 h-100" style={{height:"auto",overflow:"hidden"}}>
    <div className="col-md-6 col-lg-5 col-xl-4 p-0  d-flex flex-column  parent  "  >
       <div className="w-100 p-1 position-fixed-top child1"  >
             <div className="form">
                  <i className="fa fa-search"></i>
                  <input type="text" className="form-control form-input" placeholder="Search Chats"/>
                  <span className="left-pan"><i className="fa fa-microphone"></i></span>
             </div>
       </div>
       <div id="chatsListsBox"> 
          
         <ChatListitem/>
            </div>
    </div>
     <div className="col-md-6 col-lg-7 col-xl-8  h-100 p-0 ">
     {true&& <div className="card p-0 m-0 box-shadow ps-3 bg-light">
           <div className="card-body bg-light m-0 pb-0 p-1 ps-2 pe-2 pt-1">
             <ul className="list-unstyled m-1">
               <li className="">
                 <a href="#!" className="d-flex justify-content-between text-decoration-none">
                   <div className="d-flex flex-row">
                     <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"width="60"/>
                     <div className=" ms-3 " >
                       <h3 className="m-0 darkgreen" >Jackson Jack</h3>
                       <p className="fs-6 m-0 midgreen">Online</p>
                     </div>
                   </div>
                  
                 </a>
               </li>
           </ul>
           </div>
       </div>
             }
{/* {false&& */}
       <div className=" overflow-scroll">
            <ul className="list-unstyled p-3">
                <RecivedMessage message={"Hello"}/>
                 <Sentmessage message={"Hello Jack"}/>
                 <RecivedMessage message={"How are you"}/>
                 <Sentmessage message={"i am good and you"}/>
                 <RecivedMessage message={"i am also fine"}/>
                 <Sentmessage message={"ok"}/>
                 {/* <RecivedMessage message={"ok..."}/> */}





            </ul>
        </div>
{/* } */}
{/* {false&&   */}
  <div className="p-1">
        <div className="w-100  row m-0"  >
          <div className="col-9 p-1">
            <input type="text" className="form-control-lg w-100 " id="floatingInput" placeholder="Type a message..."/>
         </div>
         <div className="col-1 p-1">
          <button type="button" className="btn btn-outline-warning w-100 h-100 fs-4"  onClick={openFileExplorer}>
          <form className=""  id="uploadprofileimage" action="/user/uploadprofileimage" method="post" enctype="multipart/form-data">
           <input type="file" id="fileInput" name="profileimage" style={{display:"none"}} onchange="submitFormOnChange()"  accept="image/*"/>
            <label for="imageInput" className="custom-file-input-label" id="fileInputLabel"><i className="bi bi-paperclip"></i></label>
           </form>
          </button>
       </div>
         <div className="col-2 p-1">
           <button type="button" className="btn btn-outline-primary w-100 h-100 "><i className="bi bi-send-fill"></i>&nbsp;Send</button>
         </div>
        </div>
        </div>
        {/* } */}

        </div>
    </div>

       

          


    </>
  );
}
export default Chatsection;
