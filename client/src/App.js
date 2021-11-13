//importing hooks from React
import { useState, useEffect } from "react";
import "../styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fishroom from "./components/Fishroom";
import Mainroom from "./components/Mainroom";
import Gameroom from "./components/Gameroom";
import Home from "./components/Home";

export default function App(props) {

  return (
      
<BrowserRouter>
{/* Routes is the container for all of our potential routes */}
<Routes>
    {/* Route is each individual route; we will utilize the path and element prop. 
 Path reflects the URL path, element is where we render our component */}
    <Route path="/" element={<Home/>}/>
    <Route path="/mainroom" element={<Mainroom/>}/>
    <Route path="/fishroom" element={<Fishroom/>}/>
    <Route path="/gameroom" element={<Gameroom/>}/>
    
    
</Routes>
</BrowserRouter>

    // <Router>
    //   <div id="all-Rooms">
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/mainroom">mainroom</Link>
    //         </li>

    //         <li>
    //           <Link to="/gameroom">gameroom</Link>
    //         </li>

    //         <li>
    //           <Link to="/fishroom">fishroom</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/mainroom">
    //         <MainRoom />
    //       </Route>
    //       <Route path="/gameroom">
    //         <GameRoom />
    //       </Route>
    //       <Route path="/fishroom">
    //         <FishRoom />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

