var mongoose = require("mongoose");
var ltdiv2prob4 = require("../models/ltdiv2prob4");

var pltdiv2prob4 = [
	{
		month: "April",
		year: "2020",
		name: "Triangle Query",
		code: "TRIQ0RY",
		url:"https://www.codechef.com/LTIME83B/problems/TRIQRY"
	}
];

function seedltdiv2prob4(){
   ltdiv2prob4.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all lunch time division 2 problem 4!");
			 //add a few campgrounds
			pltdiv2prob4.forEach(function(seed){
				ltdiv2prob4.create(seed, function(err, problem){
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

module.exports = seedltdiv2prob4;

