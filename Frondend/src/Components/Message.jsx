import React from "react";
import "../../public/Message.css";

const Message = () => {
  return (
    <>
      <header className="message-main">
        <h3>Enjoy with Colleagues</h3>
        <button className="leave-btn">Leave</button>
      </header>

      <div className="message-container">
        <div className="message__chats message__chats1">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there How are u </p>
          </div>
        </div>

        <div className="message__chats message__chats2">
          <p className="recipient__name"> Other</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default Message;
