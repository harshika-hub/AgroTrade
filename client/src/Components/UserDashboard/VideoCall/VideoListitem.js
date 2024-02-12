import { useEffect, useState } from "react";
import jscookie from "js-cookie"
import axios from "axios";

import { REQUESTED_URL, USER_REQUESTED_URL } from "../../../urls";
function ChatListitem(props) {
  var reciverEmail;
  const currentUserEmail = jscookie.get("userEmail")
  const token = jscookie.get("token")
  var [reciverObj, setReciverObj] = useState({})
  const { expert, openChat, index } = props;
  useEffect(() => {

    async function getUserData() {
      var obj = await axios.post(USER_REQUESTED_URL + `/getUser`, { email: reciverEmail, token });
      setReciverObj(obj.data[0])
    }

    getUserData();

  }, [])
  return (<>
    <div className="card p-0" onClick={() => { openChat( index, expert) }}>
      <div className="card-body bg-light m-0 pb-0 p-1 ps-2 pe-2 pt-2">
        <ul className="list-unstyled m-0">
          <li className="">
            <a href="#!" className="d-flex justify-content-between text-decoration-none">
              <div className="d-flex flex-row p-1">
                <img src={"http://localhost:3000/" + expert.expert.image} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60" />
                <div>
                  <h4 className="darkgreen" >{expert.expert.name}</h4>
                  <p className="small midgreen">
                    connect call
                  </p>
                </div>
              </div>
              <div className="" >
                <span className="text-muted float-end m-1">
                  <i className="fas fa-check text-success" aria-hidden="true"></i>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>);
}

export default ChatListitem;