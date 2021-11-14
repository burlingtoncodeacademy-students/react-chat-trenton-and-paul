
import "./styles/App.css"
import React from "react";
import { useState, useEffect } from "react";
import MessageBox from "./MessageBox";
import FishMbox from "./FishMbox"

import App from "../App";
import { Link } from "react-router-dom";

export default function FishRoom() {
    return (
        <div className="App">
        <h1>Fish, Chat!</h1>
        <div id="BoxContainer">
          <FishMbox />
          <div id="link-box">
          <Link to="/">home page</Link>
          </div>
        </div>
        <form action="/fishmessage" method="POST">
          <input
            type="text"
            name="username"
            placeholder="pls enter your username"
          ></input>
          <input
            type="text"
            name="message"
            placeholder="enter your message here!"
          ></input>
          <input type="submit" name="button"></input>
        </form>
      </div>
    )
}