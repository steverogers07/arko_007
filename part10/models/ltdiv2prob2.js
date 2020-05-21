var mongoose = require("mongoose");

var ltdiv2prob2Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ltdiv2prob2", ltdiv2prob2Schema);