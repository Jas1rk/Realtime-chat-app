import { useState } from "react";
import "./App.css";
import socketIO from "socket.io-client";
import Home from "./Components/Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Chatpage from "./Pages/Chatpage";


const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={ <Home socket={socket}/>}></Route>
      <Route path="/chat" element={  <Chatpage socket={socket}/>}></Route>
    </Routes>
  </Router>
     
    </>
  );
}

export default App;
