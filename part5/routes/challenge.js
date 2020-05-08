var express    = require("express");
var router     = express.Router();
var lcdiv2prob1 = require("../models/lcdiv2prob1");

// To the LONG CHALLENGE
router.get("", function(req,res){
	res.render("problems/challenge");
});

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 1
router.get("/div2prob1", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob1.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob1",{problems: allProblems});
		}
	});
});

module.exports = router;