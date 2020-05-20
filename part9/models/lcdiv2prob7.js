var mongoose = require("mongoose");

var lcdiv2prob7Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("lcdiv2prob7", lcdiv2prob7Schema);