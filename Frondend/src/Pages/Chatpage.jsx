import React, { useEffect, useRef, useState } from "react";
import Chatbar from "../Components/Chatbar";
import "../../public/Chatpage.css";
import Message from "../Components/Message";
import Inbox from "../Components/Inbox";

const Chatpage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessage = useRef(null);
  const [typingStatus, setTypingStatus] = useState("");

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="chat">
      <Chatbar socket={socket} />
      <div className="chat-main">
        <Message
          messages={messages}
          lastMessage={lastMessage}
          typingStatus={typingStatus}
        />
        <Inbox socket={socket} />
      </div>
    </div>
  );
};

export default Chatpage;
