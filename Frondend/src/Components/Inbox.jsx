import React, { useState } from "react";
import "../../public/Inbox.css";

const Inbox = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleMessage = (event) => {
    event.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleMessage}>
        <input
          type="text"
          placeholder="Message"
          className="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button className="send-btn">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Inbox;
