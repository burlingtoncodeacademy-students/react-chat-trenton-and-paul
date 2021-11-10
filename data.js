
//imports
const mongoose = require("mongoose");
const {MongoClient,  ObjectId } = require("mongodb");

mongoose.connect("mongodb://localhost:27017/message's", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
//error handling
db.on("error", console.error.bind(console, "connection error"));

//readline imports
const readline = require("readline");
const { AsyncLocalStorage } = require("async_hooks");
const { isDate } = require("util/types");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

//create an async function to ask for user input and await the database connection.
//start function with a schema
async function start(){
    let messageSchema = new mongoose.Schema({
        when: Date,
        author: String,
        body: String
    })
}

//model
const Message = mongoose.model('Message', messageSchema)

let date 
let user
let message




