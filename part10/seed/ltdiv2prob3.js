var mongoose = require("mongoose");
var ltdiv2prob3 = require("../models/ltdiv2prob3");

var pltdiv2prob3 = [
	{
		month: "April",
		year: "2020",
		name: "Positive Mex",
		code: "MEXUM",
		url:"https://www.codechef.com/LTIME83B/problems/MEXUM"
	}
];

function seedltdiv2prob3(){
   ltdiv2prob3.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all lunch time division 2 problem 3!");
			 //add a few campgrounds
			pltdiv2prob3.forEach(function(seed){
				ltdiv2prob3.create(seed, function(err, problem){
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

module.exports = seedltdiv2prob3;

