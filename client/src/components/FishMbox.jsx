//importing hooks from React
import { useState, useEffect } from "react";
import "./styles/App.css";

export default function MessageBox(props) {
  //uses state to hold the result of the fetch
  const [fishMessages, setFishMessages] = useState([]);
  const [count, setCount] = useState(0);

  // setInterval(()=>{
  //   setCount(count +1)
  // },10000 )

  useEffect(() => {
    //fetches information from a local API route
    fetch("/fishmessages")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //setting fish messages to the collected json file
        setFishMessages(json);
      });
  }, []);

  return (
    //the chat box
    <center>
      {" "}
      <div id="fishchatbox">
        {fishMessages.map((entry) => {
          return (
            <div>
              {/* pulling in the author and the message into the chat box */}
              <p>{entry.author}</p>
              <p>{entry.body}</p>
            </div>
          );
        })}
      </div>
    </center>
  );
}
