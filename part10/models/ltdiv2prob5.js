var mongoose = require("mongoose");

var ltdiv2prob5Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ltdiv2prob5", ltdiv2prob5Schema);