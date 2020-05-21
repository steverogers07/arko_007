var mongoose = require("mongoose");
var ltdiv2prob2 = require("../models/ltdiv2prob2");

var pltdiv2prob2 = [
	{
		month: "April",
		year: "2020",
		name: "Another Birthday Present",
		code: "SHUFFLE",
		url:"https://www.codechef.com/LTIME83B/problems/SHUFFLE"
	}
];

function seedltdiv2prob2(){
   ltdiv2prob2.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all lunch time division 2 problem 2!");
			 //add a few campgrounds
			pltdiv2prob2.forEach(function(seed){
				ltdiv2prob2.create(seed, function(err, problem){
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

module.exports = seedltdiv2prob2;

