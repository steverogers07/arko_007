var mongoose = require("mongoose");

var lcdiv2prob8Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob8", lcdiv2prob8Schema);