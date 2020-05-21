var mongoose = require("mongoose");
var ckdiv2prob4 = require("../models/ckdiv2prob4");

var pckdiv2prob4 = [
	{
		month: "April",
		year: "2020",
		name: "Tower Counting",
		code: "TOWCNT",
		url:"https://www.codechef.com/COOK117B/problems/TOWCNT"
	}
];

function seedckdiv2prob4(){
   ckdiv2prob4.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all cook off division 2 problem 4!");
			 //add a few campgrounds
			pckdiv2prob4.forEach(function(seed){
				ckdiv2prob4.create(seed, function(err, problem){
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

module.exports = seedckdiv2prob4;

