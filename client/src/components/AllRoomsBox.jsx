//importing hooks from React
import { useState, useEffect } from "react";
import "../styles/App.css"

export default function AllRooms(props){
    //uses state to hold the result of the fetch
    const [allRooms, setAllRooms] = useState([])

// useEffect(()=>{
//  //fetches information from a local API route
//  fetch("http://localhost:8000/allmessages")
//  .then((res)=>{
//      return res.json()
//  })
//  .then((json)=>{
//      setAllMessages(json)
//  })
// }, [])

return (
 
<div id="all-Rooms" >
    <ul>
        <a href="/mainroom.jsx"><li>Main</li></a>
        <a href="/html/gameroom.jsx"><li>Game Chat</li></a>
        <a href="/html/fishroom.jsx"><li>Fish Chat</li></a>
        </ul>
    </div> 


  );

}





  
    


