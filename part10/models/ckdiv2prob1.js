var mongoose = require("mongoose");

var ckdiv2prob1Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ckdiv2prob1", ckdiv2prob1Schema);