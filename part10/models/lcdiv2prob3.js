var mongoose = require("mongoose");

var lcdiv2prob3Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob3", lcdiv2prob3Schema);