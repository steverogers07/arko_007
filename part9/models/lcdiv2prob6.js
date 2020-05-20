var mongoose = require("mongoose");

var lcdiv2prob6Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob6", lcdiv2prob6Schema);