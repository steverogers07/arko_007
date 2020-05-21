var mongoose = require("mongoose");
var ltdiv2prob1 = require("../models/ltdiv2prob1");

var pltdiv2prob1 = [
	{
		month: "April",
		year: "2020",
		name: "Chef in Fantasy League",
		code: "FFL",
		url:"https://www.codechef.com/LTIME83B/problems/FFL"
	}
];

function seedltdiv2prob1(){
   ltdiv2prob1.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all lunch time division 2 problem 1!");
			 //add a few campgrounds
			pltdiv2prob1.forEach(function(seed){
				ltdiv2prob1.create(seed, function(err, problem){
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

module.exports = seedltdiv2prob1;

