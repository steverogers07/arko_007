var mongoose = require("mongoose");
var lcdiv2prob7 = require("../models/lcdiv2prob7");

var plcdiv2prob7 = [
	{
		month: "May",
		year: "2020",
		name: "Not a Real World Problem",
		code: "NRWP",
		url:"https://www.codechef.com/MAY20B/problems/NRWP"
	}
];

function seedlcdiv2prob7(){
   lcdiv2prob7.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 7!");
			 //add a few campgrounds
			plcdiv2prob7.forEach(function(seed){
				lcdiv2prob7.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob7;

