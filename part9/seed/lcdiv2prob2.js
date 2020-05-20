var mongoose = require("mongoose");
var lcdiv2prob2 = require("../models/lcdiv2prob2");

var plcdiv2prob2 = [
	{
		month: "May",
		year: "2020",
		name: "Isolation Centers",
		code: "CORUS",
		url:"https://www.codechef.com/MAY20B/problems/CORUS"
	}
];

function seedlcdiv2prob2(){
   lcdiv2prob2.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 2!");
			 //add a few campgrounds
			plcdiv2prob2.forEach(function(seed){
				lcdiv2prob2.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob2;

