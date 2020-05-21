var mongoose = require("mongoose");
var ltdiv2prob5 = require("../models/ltdiv2prob5");

var pltdiv2prob5 = [
	{
		month: "April",
		year: "2020",
		name: "Dot Time",
		code: "DOTTIME",
		url:"https://www.codechef.com/LTIME83B/problems/DOTTIME"
	}
];

function seedltdiv2prob5(){
   ltdiv2prob5.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all lunch time division 2 problem 5!");
			 //add a few campgrounds
			pltdiv2prob5.forEach(function(seed){
				ltdiv2prob5.create(seed, function(err, problem){
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

module.exports = seedltdiv2prob5;

