var mongoose = require("mongoose");
var lcdiv2prob3 = require("../models/lcdiv2prob3");

var plcdiv2prob3 = [
	{
		month: "May",
		year: "2020",
		name: "Triple Sort",
		code: "TRPLSRT",
		url:"https://www.codechef.com/MAY20B/problems/TRPLSRT"
	}
];

function seedlcdiv2prob3(){
   lcdiv2prob3.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 3!");
			 //add a few campgrounds
			plcdiv2prob3.forEach(function(seed){
				lcdiv2prob3.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob3;

