var mongoose = require("mongoose");

var lcdiv2prob2Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob2", lcdiv2prob2Schema);