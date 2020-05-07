var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// app.get("/",function(req,res){
// 	res.render("welcome");
// });

var problems = [
	{month: "May", year: "2020", name: "Coronavirus Spread", code: "COVID19", url:"https://www.codechef.com/MAY20B/problems/COVID19"},
	{month: "April", year: "2020", name: "COVID Pandemic and Long Queue", code: "COVIDLQ", url: "https://www.codechef.com/APRIL20B/problems/COVIDLQ"},
	{month: "March", year: "2020", name: "Pintu and Fruits", code: "CHPINTU", url: "https://www.codechef.com/MARCH20B/problems/CHPINTU"}
];

app.get("/", function(req,res){
	res.render("welcome");
});

app.get("/challenge", function(req,res){
	res.render("problems/challenge");
});

app.get("/cook", function(req,res){
	res.render("problems/cook");
});

app.get("/ltime", function(req,res){
	res.render("problems/ltime");
});

app.get("/challenge/div2prob1", function(req,res) {
	//console.log("Got it!!");
	res.render("problems/lc/div2prob1",{problems:problems});
});

app.listen(3000,() => {
	console.log("Server Has Started");
});