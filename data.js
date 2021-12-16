//imports
const mongoose = require("mongoose");

//creating our mongoose Schema
//these key value pairs are the name of the key and what TYPE you want the value to be
let MessageSchema = new mongoose.Schema({
  when: Date,
  author: String,
  body: String,
});

//exporting schema
module.exports = MessageSchema;
