//importing hooks from React
import { useState, useEffect } from "react";
import "../styles/App.css"

export default function MessageBox(props){
    //uses state to hold the result of the fetch
    const [allMessages, setAllMessages] = useState([])

useEffect(()=>{
 //fetches information from a local API route
 fetch("/allmessages")
 .then((res)=>{
     return res.json()
 })
 .then((json)=>{
    setAllMessages((json))
 })
}, [])
console.log(allMessages)

return (
    //the chat box
<center> <div id="chatbox">
 {allMessages.map((entry) =>{ return(
     <div>
     <p>{entry.author}</p>
     <p>{entry.body}</p>
     </div>
 )})}
</div></center>
)

}

