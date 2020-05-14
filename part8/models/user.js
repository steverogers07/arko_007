var mongoose  = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	dp: String,
	username: String,
	firstname: String,
	lastname: String,
	email: String,
	password: String,
	solved: [
		{	 
			type: String
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);