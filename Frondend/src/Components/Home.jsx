import React from "react";
import "../../public/Home.css";

const Home = () => {
  return (
    <form className="home-container">
      <h2 className="home-header">Sign in to chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="username-input"
        placeholder="Type here"
      />
      <button className="home-btn">Sign in</button>
    </form>
  );
};

export default Home;
