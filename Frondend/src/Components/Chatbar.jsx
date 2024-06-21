import React, { useEffect, useState } from "react";
import "../../public/Chatbar.css";

const Chatbar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("userResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat-sidebar">
      <h2>Open chat</h2>
      <div>
        <h4 className="chat-headeres">ACTIVE USERS</h4>
        <div className="chat-users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbar;
