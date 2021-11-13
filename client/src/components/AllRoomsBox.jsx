// //importing hooks from React
// import { useState, useEffect } from "react";
// import "../styles/App.css";
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FishRoom from "./fishroom";
// import MainRoom from "./Mainroom";
// import GameRoom from "./gameroom";

// export default function AllRooms(props) {
//   //uses state to hold the result of the fetch
//   const [allRooms, setAllRooms] = useState([]);

//   // useEffect(()=>{
//   //  //fetches information from a local API route
//   //  fetch("http://localhost:8000/allmessages")
//   //  .then((res)=>{
//   //      return res.json()
//   //  })
//   //  .then((json)=>{
//   //      setAllMessages(json)
//   //  })
//   // }, [])

//   return (
      
// <BrowserRouter>
// {/* Routes is the container for all of our potential routes */}
// <Routes>
//     {/* Route is each individual route; we will utilize the path and element prop. 
//  Path reflects the URL path, element is where we render our component */}
//     <Route path=""/>
//     <Route/>
//     <Route/>
// </Routes>
// </BrowserRouter>

//     // <Router>
//     //   <div id="all-Rooms">
//     //     <nav>
//     //       <ul>
//     //         <li>
//     //           <Link to="/mainroom">mainroom</Link>
//     //         </li>

//     //         <li>
//     //           <Link to="/gameroom">gameroom</Link>
//     //         </li>

//     //         <li>
//     //           <Link to="/fishroom">fishroom</Link>
//     //         </li>
//     //       </ul>
//     //     </nav>
//     //     <Switch>
//     //       <Route path="/mainroom">
//     //         <MainRoom />
//     //       </Route>
//     //       <Route path="/gameroom">
//     //         <GameRoom />
//     //       </Route>
//     //       <Route path="/fishroom">
//     //         <FishRoom />
//     //       </Route>
//     //     </Switch>
//     //   </div>
//     // </Router>
//   );
// }
