var mongoose = require("mongoose");
var ckdiv2prob1 = require("../models/ckdiv2prob1");

var pckdiv2prob1 = [
	{
		month: "April",
		year: "2020",
		name: "Lift Requests",
		code: "LIFTME",
		url:"https://www.codechef.com/COOK117B/problems/LIFTME"
	}
];

function seedckdiv2prob1(){
   ckdiv2prob1.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all cook off division 2 problem 1!");
			 //add a few campgrounds
			pckdiv2prob1.forEach(function(seed){
				ckdiv2prob1.create(seed, function(err, problem){
					if(err){
						console.log(err)
					} else {
						console.log("added a problem");
					}
				});
			});
		}
    }); 
}

module.exports = seedckdiv2prob1;

