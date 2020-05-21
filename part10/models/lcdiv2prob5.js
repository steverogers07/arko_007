var mongoose = require("mongoose");

var lcdiv2prob5Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob5", lcdiv2prob5Schema);