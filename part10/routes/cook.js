var express    = require("express");
var router     = express.Router();
var ckdiv2prob1 = require("../models/ckdiv2prob1");
var ckdiv2prob2 = require("../models/ckdiv2prob2");
var ckdiv2prob3 = require("../models/ckdiv2prob3");
var ckdiv2prob4 = require("../models/ckdiv2prob4");
var ckdiv2prob5 = require("../models/ckdiv2prob5");
var user     = require("../models/user");
var middleware = require("../middleware");

var mongoose       = require('mongoose');

// To the COOK OFF
router.get("", function(req,res){
	res.render("problems/cook");
});

// Shows all the COOK OFF DIVISION-2 PROBLEM 1
router.get("/div2prob1", function(req,res) {
	//console.log("Got it!!");
	ckdiv2prob1.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/ck/div2prob1",{problems: allProblems});
		}
	});
});

router.post("/div2prob1", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				code=req.body.code;
				//console.log(code);
				foundUser.solved.push(code);
				foundUser.save();
				//console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				code=req.body.code;
				index=solved.indexOf(code);
				//console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				//console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob1");	
		}
	});
});

// Shows all the COOK OFF DIVISION-2 PROBLEM 2
router.get("/div2prob2", function(req,res) {
	//console.log("Got it!!");
	ckdiv2prob2.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/ck/div2prob2",{problems: allProblems});
		}
	});
});

router.post("/div2prob2", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				code=req.body.code;
				//console.log(code);
				foundUser.solved.push(code);
				foundUser.save();
				//console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				code=req.body.code;
				index=solved.indexOf(code);
				//console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				//console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob2");	
		}
	});
});

// Shows all the COOK OFF DIVISION-2 PROBLEM 3
router.get("/div2prob3", function(req,res) {
	//console.log("Got it!!");
	ckdiv2prob3.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/ck/div2prob3",{problems: allProblems});
		}
	});
});

router.post("/div2prob3", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				code=req.body.code;
				//console.log(code);
				foundUser.solved.push(code);
				foundUser.save();
				//console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				code=req.body.code;
				index=solved.indexOf(code);
				//console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				//console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob3");	
		}
	});
});

// Shows all the COOK OFF DIVISION-2 PROBLEM 4
router.get("/div2prob4", function(req,res) {
	//console.log("Got it!!");
	ckdiv2prob4.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/ck/div2prob4",{problems: allProblems});
		}
	});
});

router.post("/div2prob4", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				code=req.body.code;
				//console.log(code);
				foundUser.solved.push(code);
				foundUser.save();
				//console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				code=req.body.code;
				index=solved.indexOf(code);
				//console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				//console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob4");	
		}
	});
});

// Shows all the COOK OFF DIVISION-2 PROBLEM 5
router.get("/div2prob5", function(req,res) {
	//console.log("Got it!!");
	ckdiv2prob5.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/ck/div2prob5",{problems: allProblems});
		}
	});
});

router.post("/div2prob5", middleware.isLoggedIn, function(req,res){
	user.findById(req.user._id,function(err,foundUser){
		if(err) {
			console.log(err);
		} else {
			if(req.body.flag==1) {
				code=req.body.code;
				//console.log(code);
				foundUser.solved.push(code);
				foundUser.save();
				//console.log("This is from "+foundUser);
			} else {
				//console.log("Hello");
				solved=foundUser.solved;
				code=req.body.code;
				index=solved.indexOf(code);
				//console.log(index);
				foundUser.solved.splice(index,1);
				foundUser.save();
				//console.log("This is from you know "+foundUser);
			}
			res.redirect("div2prob5");	
		}
	});
});

module.exports = router;