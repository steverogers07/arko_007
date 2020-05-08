var express        = require("express"),
	app            = express(),
	bodyParser     = require("body-parser"),
    mongoose       = require('mongoose'),
    lcdiv2prob1    = require('./models/lcdiv2prob1'),
	passport       = require("passport"),
	Localstrategy  = require("passport-local"),
	User           = require("./models/user"),
    seedDB         = require('./seed');

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('useUnifiedTopology',true);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/arko_part4",{useNewUrlParser: true});
//seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

// Welcome Page
app.get("/", function(req,res){
	res.render("welcome");
});

// To the LONG CHALLENGE
app.get("/challenge", function(req,res){
	res.render("problems/challenge");
});

// To the COOK OFF
app.get("/cook", function(req,res){
	res.render("problems/cook");
});

// To the LUNCH TIME
app.get("/ltime", function(req,res){
	res.render("problems/ltime");
});

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 1
app.get("/challenge/div2prob1", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob1.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob1",{problems: allProblems});
		}
	});
});

//  ==============
//  AUTH ROUTES
//  ==============

//show register form
app.get("/register", function(req,res) {
	res.render("register");
});

//handle sign up logic
app.post("/register",function(req,res){
	var newUser = new User({username: req.body.username});
	User.register(newUser , req.body.password, function(err,user){
		if(err) {
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/");
		});
	});
});

// show login form
app.get("/login", function(req,res) {
	res.render("login");
});

// handling login logic
// app.post("/login", middleware, callback) === Schema
app.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/",
		failureRedirect: "/login"
	}),	 function(req,res){
});

// logout route
app.get("/logout", function(req,res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

app.listen(3000,() => {
	console.log("Server Has Started");
});