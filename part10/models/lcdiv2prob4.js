var mongoose = require("mongoose");

var lcdiv2prob4Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob4", lcdiv2prob4Schema);