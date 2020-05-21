var mongoose = require("mongoose");

var ltdiv2prob3Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ltdiv2prob3", ltdiv2prob3Schema);