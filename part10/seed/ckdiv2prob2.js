var mongoose = require("mongoose");
var ckdiv2prob2 = require("../models/ckdiv2prob2");

var pckdiv2prob2 = [
	{
		month: "April",
		year: "2020",
		name: "Matrix Decomposition",
		code: "MATBREAK",
		url:"https://www.codechef.com/COOK117B/problems/MATBREAK"
	}
];

function seedckdiv2prob2(){
   ckdiv2prob2.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all cook off division 2 problem 2!");
			 //add a few campgrounds
			pckdiv2prob2.forEach(function(seed){
				ckdiv2prob2.create(seed, function(err, problem){
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

module.exports = seedckdiv2prob2;