var mongoose = require("mongoose");

var lcdiv2prob1Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob1", lcdiv2prob1Schema);