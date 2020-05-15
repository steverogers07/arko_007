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
			//console.log("HI");
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			console.log(newUser);
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
	res.redirect("/");
});


module.exports = router;