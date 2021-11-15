//Imports hooks from react
import "./styles/App.css";
import React from "react";
import GameMbox from "./GameMbox";
import { Link } from "react-router-dom";

//the game room chat
export default function GameRoom() {
  return (
    //wrapping div for the page
    <div className="App" id="gamechatwrapper">
      <h1>Game, Chat!</h1>
      {/* //chat box and link wrapper */}
      <div id="BoxContainer">
        <GameMbox />
        <div id="link-box">
          <Link to="/">home page</Link>
        </div>
      </div>
      {/* form with inputs for username the the message they want to send with a submit button */}
      <div id="button-wrapper">
      <form action="/gamemessage" method="POST">
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
