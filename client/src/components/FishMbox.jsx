//importing hooks from React
import { useState, useEffect } from "react";
import "./styles/App.css"

export default function MessageBox(props){
    //uses state to hold the result of the fetch
    const [fishMessages, setFishMessages] = useState([])
    const [count, setCount] = useState(0);
  // const [user, setUser] = useState(null);
  // const [message, setMessage] = useState(null);



// setInterval(()=>{
//   setCount(count +1)
// },10000 )



useEffect(()=>{
 //fetches information from a local API route
 fetch("/fishmessages")
 .then((res)=>{
     return res.json()
 })
 .then((json)=>{
    setFishMessages((json))
 })
}, [])


return (
    //the chat box
<center> <div id="chatbox">
 {fishMessages.map((entry) =>{ return(
     <div>
     <p>{entry.author}</p>
     <p>{entry.body}</p>
     </div>
 )})}
</div></center>
)

}
