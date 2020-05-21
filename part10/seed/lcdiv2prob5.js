var mongoose = require("mongoose");
var lcdiv2prob5 = require("../models/lcdiv2prob5");

var plcdiv2prob5 = [
	{
		month: "May",
		year: "2020",
		name: "Sorting Vases",
		code: "SORTVS",
		url:"https://www.codechef.com/MAY20B/problems/SORTVS"
	}
];

function seedlcdiv2prob5(){
   lcdiv2prob5.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 5!");
			 //add a few campgrounds
			plcdiv2prob5.forEach(function(seed){
				lcdiv2prob5.create(seed, function(err, problem){
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

module.exports = seedlcdiv2prob5;

