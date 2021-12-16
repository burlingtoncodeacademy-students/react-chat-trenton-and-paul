//Importing hooks from react
import "./styles/App.css";
import React from "react";
import FishMbox from "./FishMbox";
import { Link } from "react-router-dom";

//the game room chat
export default function FishRoom() {
  return (
    //wrapping div for the page
    <div className="App" id="fishwrapper">
      <h1>Fish, Chat!</h1>
      {/* //chat box and link wrapper */}
      <div id="BoxContainer">
        <FishMbox />
        <div id="link-box">
          <Link to="/">home page</Link>
        </div>
      </div>
      {/* form with inputs for username the the message they want to send with a submit button */}
      <div id="button-wrapper">
      
      <form action="/fishmessage" method="POST">
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
  );
}
