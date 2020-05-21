var mongoose = require("mongoose");

var ckdiv2prob2Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ckdiv2prob2", ckdiv2prob2Schema);