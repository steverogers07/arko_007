var mongoose = require("mongoose");

var ckdiv2prob5Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ckdiv2prob5", ckdiv2prob5Schema);