var express    = require("express");
var router     = express.Router();
var lcdiv2prob1 = require("../models/lcdiv2prob1");
var user     = require("../models/user");
var middleware = require("../middleware");

var mongoose       = require('mongoose');

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

router.post("/div2prob1", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				id=req.body.id;
				//console.log(id);
				foundUser.solved.push(id);
				foundUser.save();
				console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				id=req.body.id;
				index=solved.indexOf(id);
				console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob1");	
		}
	});
});


module.exports = router;