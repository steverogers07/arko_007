var mongoose = require("mongoose");

var ckdiv2prob3Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ckdiv2prob3", ckdiv2prob3Schema);