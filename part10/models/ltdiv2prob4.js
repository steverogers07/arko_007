var mongoose = require("mongoose");

var ltdiv2prob4Schema = new mongoose.Schema({
   month: String,
   year: String,
   name: String,
   code: String,
   url: String,
});

module.exports = mongoose.model("ltdiv2prob4", ltdiv2prob4Schema);