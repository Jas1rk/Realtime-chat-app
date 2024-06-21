import React from "react";
import "../../public/Inbox.css";

const Inbox = () => {
  return (
    <div className="chat-footer">
      <form className="form">
        <input type="text" placeholder="Message" className="message" />
        <button className="send-btn">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Inbox;
