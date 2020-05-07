var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
    mongoose    = require('mongoose'),
    lcdiv2prob1  = require('./models/lcdiv2prob1'), 
    seedDB      = require('./seed');

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('useUnifiedTopology',true);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/arko_part3",{useNewUrlParser: true});
//seedDB();

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
	lcdiv2prob1.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob1",{problems: allProblems});
		}
	});
});

app.listen(3000,() => {
	console.log("Server Has Started");
});