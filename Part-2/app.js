var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
	lcdiv2prob1  = require('./models/lcdiv2prob1'), 
    seedDB      = require('./seed');

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('useUnifiedTopology',true);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/arko_part3",{useNewUrlParser: true});
seedDB();
// app.get("/",function(req,res){
// 	res.render("welcome");
// });

// var problems = [
// 	{month: "May", year: "2020", name: "Coronavirus Spread", code: "COVID19", url:"https://www.codechef.com/MAY20B/problems/COVID19"},
// 	{month: "April", year: "2020", name: "COVID Pandemic and Long Queue", code: "COVIDLQ", url: "https://www.codechef.com/APRIL20B/problems/COVIDLQ"},
// 	{month: "March", year: "2020", name: "Pintu and Fruits", code: "CHPINTU", url: "https://www.codechef.com/MARCH20B/problems/CHPINTU"}
// ];

// Show choices for the type of challenge
app.get("/", function(req,res){
	res.render("welcome");
});

// To the Long Challenge
app.get("/challenge", function(req,res){
	res.render("problems/challenge");
});

// To the Cook OFF
app.get("/cook", function(req,res){
	res.render("problems/cook");
});

// To the Lunch Time
app.get("/ltime", function(req,res){
	res.render("problems/ltime");
});

// To the Problem 1 of Division 2 Long Challenge
app.get("/challenge/div2prob1", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob1.find({}, function(err,allProblems) {
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob1",{problems:allProblems});
		}
	});
});

app.listen(3000,() => {
	console.log("Server Has Started");
});