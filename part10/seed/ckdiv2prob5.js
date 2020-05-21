var mongoose = require("mongoose");
var ckdiv2prob5 = require("../models/ckdiv2prob5");

var pckdiv2prob5 = [
	{
		month: "April",
		year: "2020",
		name: "Inversions in Permutations",
		code: "KPERM",
		url:"https://www.codechef.com/COOK117B/problems/KPERM"
	}
];

function seedckdiv2prob5(){
   ckdiv2prob5.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all cook off division 2 problem 5!");
			 //add a few campgrounds
			pckdiv2prob5.forEach(function(seed){
				ckdiv2prob5.create(seed, function(err, problem){
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

module.exports = seedckdiv2prob5;

