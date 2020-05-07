var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// app.get("/",function(req,res){
// 	res.render("welcome");
// });

var problems = [
	{month: "May", Year: "2020", name: "Coronavirus Spread", code: "COVID19", url:"https://www.codechef.com/MAY20B/problems/COVID19"},
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

app.get("/challenge/div", function(req,res){
	res.render("div/lc/lc_div",{problems:problems});
});

app.listen(3000,() => {
	console.log("Server Has Started");
});