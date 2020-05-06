var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("welcome");
});

app.get("/choice", function(req,res){
	res.render("choice");
});

app.get("/choice/challenge", function(req,res){
	res.render("problems/challenge");
});

app.get("/choice/cook", function(req,res){
	res.render("problems/cook");
});

app.get("/choice/ltime", function(req,res){
	res.render("problems/ltime");
});

app.listen(3000,() => {
	console.log("Server Has Started");
});