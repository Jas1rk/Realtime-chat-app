import React, { useEffect, useState } from "react";
import Chatbar from "../Components/Chatbar";
import "../../public/Chatpage.css";
import Message from "../Components/Message";
import Inbox from "../Components/Inbox";

const Chatpage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <Chatbar socket={socket} />
      <div className="chat-main">
        <Message messages={messages} />
        <Inbox socket={socket} />
      </div>
    </div>
  );
};

export default Chatpage;
