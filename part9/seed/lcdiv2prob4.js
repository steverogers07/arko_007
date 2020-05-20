var mongoose = require("mongoose");
var lcdiv2prob4 = require("../models/lcdiv2prob4");

var plcdiv2prob4 = [
	{
		month: "May",
		year: "2020",
		name: "Chef and Bitwise Product",
		code: "CHANDF",
		url:"https://www.codechef.com/MAY20B/problems/CHANDF"
	}
];

function seedlcdiv2prob4(){
   lcdiv2prob4.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 4!");
			 //add a few campgrounds
			plcdiv2prob4.forEach(function(seed){
				lcdiv2prob4.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob4;

