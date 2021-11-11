import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Homepage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");

  const sendData = () => {
    if (username !== "" && roomname !== "") {
      Swal.fire({
        title: `Welcome ${username.toUpperCase()}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      })
      socket.emit("joinRoom", { username, roomname });
    } else {
       Swal.fire({
        title: 'Error...',
        text: 'we can not you join, must complete all fields!',
        icon: 'error',
        timer: 1500
       });
      window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <h1>
        includeme
        <span>
          <i className="fa fa-headset"></i>
        </span>
      </h1>
        <input
          placeholder="Input your user name"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <input
          placeholder="Input the room name"
          maxLength = "21"
          value={roomname}
          onChange={(e) => setroomname(e.target.value)}
        ></input>
        <Link to={`/chat/${roomname}/${username}`}>
          <button onClick={sendData} >
            Join
          </button>
        </Link>
    </div>
  );
}

export default Homepage;
