var mongoose = require("mongoose");
var lcdiv2prob8 = require("../models/lcdiv2prob8");

var plcdiv2prob8 = [
	{
		month: "May",
		year: "2020",
		name: "Buying a New String",
		code: "TWOSTRS",
		url:"https://www.codechef.com/MAY20B/problems/TWOSTRS"
	}
];

function seedlcdiv2prob8(){
   lcdiv2prob8.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 8!");
			 //add a few campgrounds
			plcdiv2prob8.forEach(function(seed){
				lcdiv2prob8.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob8;

