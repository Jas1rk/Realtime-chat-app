import React, { useState } from "react";
import "../../public/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };

  return (
    <form className="home-container" onSubmit={handleInput}>
      <h2 className="home-header">Sign in to chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="username-input"
        placeholder="Type here"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
      />
      <button className="home-btn">Sign in</button>
    </form>
  );
};

export default Home;
