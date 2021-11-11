import logo from "./logo.svg";
import "./styles/App.css";
import React from "react";
import { useState, useEffect } from "react";
import MessageBox from "./components/messageBox";

const App = () => {
  const [date, setDate] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);


  return (
    <div className="App">
      <h1>Hello, Chat!</h1>
      <MessageBox/>
      {/* <textarea  name="messageBox" rows="10" cols="50" /> */}
      <form action="/message" method="POST">
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
  );
};

export default App;
