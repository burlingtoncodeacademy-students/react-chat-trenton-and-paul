//importing hooks from React
import { useState, useEffect } from "react";
import "./components/styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FishRoom from "./components/FishRoom";
import GameRoom from "./components/GameRoom";
import Home from "./components/Home";

function App(props) {
  //routes to the other chat boxes and back to home
  return (
    <div>
      <BrowserRouter>
        {/* Routes is the container for all of our potential routes */}
        <Routes>
          {/* Route is each individual route; we will utilize the path and element prop. 
 Path reflects the URL path, element is where we render our component */}
          <Route path="/" element={<Home />} />
          <Route path="/FishRoom" element={<FishRoom />} />
          <Route path="/GameRoom" element={<GameRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
