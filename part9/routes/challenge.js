var express    = require("express");
var router     = express.Router();
var lcdiv2prob1 = require("../models/lcdiv2prob1");
var lcdiv2prob2 = require("../models/lcdiv2prob2");
var lcdiv2prob3 = require("../models/lcdiv2prob3");
var lcdiv2prob4 = require("../models/lcdiv2prob4");
var lcdiv2prob5 = require("../models/lcdiv2prob5");
var lcdiv2prob6 = require("../models/lcdiv2prob6");
var lcdiv2prob7 = require("../models/lcdiv2prob7");
var lcdiv2prob8 = require("../models/lcdiv2prob8");
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

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 2
router.get("/div2prob2", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob2.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob2",{problems: allProblems});
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

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 3
router.get("/div2prob3", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob3.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob3",{problems: allProblems});
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

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 4
router.get("/div2prob4", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob4.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob4",{problems: allProblems});
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

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 5
router.get("/div2prob5", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob5.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob5",{problems: allProblems});
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

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 6
router.get("/div2prob6", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob6.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob6",{problems: allProblems});
		}
	});
});

router.post("/div2prob6", middleware.isLoggedIn, function(req,res){
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
			res.redirect("div2prob6");	
		}
	});
});

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 7
router.get("/div2prob7", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob7.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob7",{problems: allProblems});
		}
	});
});

router.post("/div2prob7", middleware.isLoggedIn, function(req,res){
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
			res.redirect("div2prob7");	
		}
	});
});

// Shows all the LONG CHALLENGE DIVISION-2 PROBLEM 8
router.get("/div2prob8", function(req,res) {
	//console.log("Got it!!");
	lcdiv2prob8.find({},function(err, allProblems){
		if(err) {
			console.log(err);
		} else {
			res.render("problems/lc/div2prob8",{problems: allProblems});
		}
	});
});

router.post("/div2prob8", middleware.isLoggedIn, function(req,res){
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
			res.redirect("div2prob8");	
		}
	});
});


module.exports = router;