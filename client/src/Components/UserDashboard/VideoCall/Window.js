// import RecivedMessage from "./RecivedMessage";
// import Sentmessage from "./Sentmessage";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import jscookie from "js-cookie";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

import { useNavigate } from "react-router-dom";
function MessagesSection(props) {
  const { activeVideo, status } = props
  const [roomId, setRoomId] = useState();
  const [userId, setUserID] = useState()
  const [userName, setUserName] = useState()
  const [visible, setVisible] = useState(false)


  const navigate = useNavigate()
  useEffect(() => {


  }, []);

  useEffect(() => {
    if (status) {
      console.log("active user", activeVideo);
      setRoomId(activeVideo._id);
      setUserName(activeVideo.expert.name)
      if (activeVideo.expert.expert_status) {
        setUserID(activeVideo.expertId)
      } else {
        setUserID(activeVideo.clientId);
      }
      setVisible(true);

    }
  }, [activeVideo]);



  const myMeet = async (element) => {
    const appId = 901040147;
    const serverSecret = "3394f0f23db653711c438b82ba6a6636";
    console.log(".............", userId, userName, roomId);
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, userId, userName + " ji")
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,

      },
      showScreenSharingButton: false,
      onLeaveRoom: (() => { navigate('/dashboard') })
    })
  }



  return (<>
    <div className="bg-light" id="mainMessageSetionDiv" >
      {visible ?
        <>
          <div className=" p-1 m-0 box-shadow ps-3" id="typingStatusDiv">
            {/* <div className="card-body m-0 pb-0 p-1 ps-2 pe-2 pt-1 "> */}

              <div ref={myMeet} />
            {/* </div> */}

          </div>

        </> : <>
          <div className="bg-danger flex-grow-1 d-flex justify-content-center  align-items-end" id="gigDiv" >
            <h1 className="text-center mb-5 text-success " style={{ fontFamily: "monospace" }}><i class="bi bi-chat-right-dots-fill"></i>&nbsp;Tap to start chat</h1>
          </div>
        </>
      }
    </div>
  </>);
}

export default MessagesSection;
