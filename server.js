//import mongoose
const mongoose = require("mongoose");

// server set up
const express = require("express");
const path = require("path");
const app = express();
//setting up default port
const port = process.env.PORT || 8000;
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//import Schema
const Message = require("./data");


//creating conection to database
mongoose.connect("mongodb://localhost:27017/messagebox");

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection;

//binds error message to the connection variable to print if an error occurs
db.on("error", console.error.bind(console, "connection error"));

//creating the Entries model utilizing the Entry schema and the "message" collection
const Messages = mongoose.model("all-Messages", Message);

//middle wear
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));


//creating our API route for the front end to access the entries from the database
app.get("/allmessages", async (req, res) => {
  //assigning the result of a find on our Model to a variable
  let allMessages = await Messages.find({});
  //sending the result as a json to the page
  res.json(allMessages);
});

//CREATE functionality for inserting a new entry
app.post("/message", async (req, res) => {
  console.log(req.body);
  //assigning the creation of a new entry to a variable
  const newMessage = new Messages({
    when: Date.now(),
    author: req.body.username,
    body: req.body.message,
  });
  //saving the new entry to the Model
  await newMessage.save();
  //redirecting to the home page
  res.redirect("/");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
