import '@fortawesome/fontawesome-free/css/all.min.css';
import Chat from "./chat/chat";
import Home from "./home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect('/');
function Appmain(props) {
  return (
    <div>
      <Chat
        username={props.match.params.username}
        roomname={props.match.params.roomname}
        socket={socket}
      />
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
