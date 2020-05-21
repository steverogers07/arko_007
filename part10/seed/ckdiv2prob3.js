var mongoose = require("mongoose");
var ckdiv2prob3 = require("../models/ckdiv2prob3");

var pckdiv2prob3 = [
	{
		month: "April",
		year: "2020",
		name: "Minimum Operations",
		code: "MINOPS",
		url:"https://www.codechef.com/COOK117B/problems/MINOPS"
	}
];

function seedckdiv2prob3(){
   ckdiv2prob3.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all cook off division 2 problem 3!");
			 //add a few campgrounds
			pckdiv2prob3.forEach(function(seed){
				ckdiv2prob3.create(seed, function(err, problem){
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

module.exports = seedckdiv2prob3;

