//Imports hooks from react
import "./styles/App.css";
import React from "react";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";
//rendering the home page with chat box and links
const Home = () => {
    return(
  //wrapping page div for style
  <div className="App">
    <h1>Hello, Chat!</h1>
    {/* wrapping container that holds the chat box and the link box */}
    <div id="BoxContainer">
      <MessageBox />
      <div id="link-box">
        <Link to="/Fishroom">Fish room</Link>
        <Link to="/Gameroom">Game room</Link>
      </div>
    </div>
    <div id="button-wrapper">
    <form action="/message" method="POST">
      <input
        type="text"
        name="username"
        placeholder="pls enter your username"
        class="input"
      ></input>
      <input
        type="text"
        name="message"
        placeholder="enter your message here!"
        class="input"
      ></input>
      <input type="submit" name="button"></input>
    </form>
    </div>
  </div>
  )
};

export default Home;
