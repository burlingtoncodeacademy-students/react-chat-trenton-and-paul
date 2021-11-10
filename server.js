require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));


app.get("/all", async (req, res)=>{
  let filePath = []
})

app.post('/message', express.urlencoded({ extended: true }), (req, res) =>{

} )

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})