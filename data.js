
//imports
const mongoose = require("mongoose");

//creating our mongoose Schema
//these key value pairs are the name of the key and what TYPE you want the value to be
let MessageSchema = new mongoose.Schema({
  when: Date,
  author: String,
  body: String
})

//exporting schema
module.exports = MessageSchema






// mongoose.connect("mongodb://localhost:27017/message's", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// //error handling
// db.on("error", console.error.bind(console, "connection error"));


// //create an async function to ask for user input and await the database connection.
// //start function with a schema
// async function start(){
 







