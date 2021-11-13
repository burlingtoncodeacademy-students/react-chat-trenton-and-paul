import logo from "./logo.svg";
import "./styles/App.css";
import React from "react";
import { useState, useEffect } from "react";
import MessageBox from "./components/messageBox";
import AllRooms from "./components/AllRoomsBox";

const App = () => {
 






// useEffect(()=> {
// function refreshTimer (){
//   idTimer = setInterval(tick, 1000);

//   async function tick() {
//     let minutes = Math.floor(count / 60);
//     let seconds = count % 60;
//     if (seconds < 10) {
//       console.log(`${minutes}:0${seconds}`)
//     } else {
//     console.log(`${minutes}:${seconds}`)
//     }
//     setCount(count +1)
//     while(count >= 10){
//       clearInterval(idTimer);
//     }
//   }
// }
// refreshTimer()
// }
// )
  return (
    <div className="App">
      <h1>Hello, Chat!</h1>
      <MessageBox />
      <AllRooms/>
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
