import React from "react";
import "../../public/Message.css";
import { useNavigate } from "react-router-dom";

const Message = ({ messages, lastMessage, typingStatus }) => {
  const navigate = useNavigate();
  let preSender = null

  const leaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };
  return (
    <>
      <header className="message-main">
        <h3>Enjoy with Colleagues</h3>
        <button className="leave-btn" onClick={leaveChat}>
          Leave
        </button>
      </header>

      <div className="message-container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <>
              <div className="message__chats message__chats1" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="message__chats message__chats2" key={message.id}>
                <p className="recipient__name">{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
              </div>
            </>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessage} />
      </div>
    </>
  );
};

export default Message;

