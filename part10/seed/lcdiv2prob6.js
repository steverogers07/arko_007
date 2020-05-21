var mongoose = require("mongoose");
var lcdiv2prob6 = require("../models/lcdiv2prob6");

var plcdiv2prob6 = [
	{
		month: "May",
		year: "2020",
		name: "(Challenge)Nanobots",
		code: "NBOTS",
		url:"https://www.codechef.com/MAY20B/problems/NBOTS"
	}
];

function seedlcdiv2prob6(){
   lcdiv2prob6.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 6!");
			 //add a few campgrounds
			plcdiv2prob6.forEach(function(seed){
				lcdiv2prob6.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob6;

