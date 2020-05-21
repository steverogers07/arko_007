var mongoose = require("mongoose");

var ckdiv2prob4Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ckdiv2prob4", ckdiv2prob4Schema);