var mongoose = require("mongoose");

var ltdiv2prob1Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ltdiv2prob1", ltdiv2prob1Schema);