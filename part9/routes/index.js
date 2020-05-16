var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var User     = require("../models/user");
var middleware = require("../middleware");

// Welcome Page
router.get("/", function(req,res){
	res.render("welcome");
});

router.get("/profile", middleware.isLoggedIn, function(req,res) {
	res.render("profile");
});

router.get("/profile/edit", middleware.isLoggedIn, function(req,res) {
	res.render("edit");
});

router.post("/profile/edit", middleware.isLoggedIn, function(req,res) {
	// console.log("HELLO");
	req.user.firstname=req.body.firstname;
	req.user.lastname=req.body.lastname;
	req.user.college=req.body.college;
	req.user.profession=req.body.profession;
	req.user.dp=req.body.filename;
	req.user.save();
	console.log(req.user);
	res.redirect("/profile");
});

router.get("/about", function(req,res) {
	res.render("about");
});

//show register form
router.get("/register", function(req,res) {
	res.render("register");
});

//handle sign up logic
router.post("/register",function(req,res){
	var newUser = new User({username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email});
	//console.log("HELLO");
	//console.log(req.body.firstname);
	User.register(newUser , req.body.password, function(err,user){
		if(err) {
			console.log(err);
			req.flash("error", err.message);
			//console.log("HI");
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			console.log(newUser);
			req.flash("success", "Welcome to Arko " + user.firstname);
			res.redirect("/");
		});
	});
});

// show login form
router.get("/login", function(req,res) {
	res.render("login");
});

// handling login logic
router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/",
		failureRedirect: "/login"
	}),	 function(req,res){
});

// logout route
router.get("/logout", function(req,res) {
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/");
});


module.exports = router;