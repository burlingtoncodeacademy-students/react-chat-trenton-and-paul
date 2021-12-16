//importing hooks from React
import { useState, useEffect } from "react";
import "./components/styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fishroom from "./components/Fishroom";
import Gameroom from "./components/Gameroom";
import Home from "./components/Home";

export default function App(props) {
  //routes to the other chat boxes and back to home
  return (
    <div>
      <BrowserRouter>
        {/* Routes is the container for all of our potential routes */}
        <Routes>
          {/* Route is each individual route; we will utilize the path and element prop. 
 Path reflects the URL path, element is where we render our component */}
          <Route path="/" element={<Home />} />
          <Route path="/Fishroom" element={<Fishroom />} />
          <Route path="/Gameroom" element={<Gameroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
