var mongoose = require("mongoose");
var lcdiv2prob1 = require("./models/lcdiv2prob1");

var plcdiv2prob1 = [
	{
		month: "May",
		year: "2020",
		name: "Coronavirus Spread",
		code: "COVID19",
		url:"https://www.codechef.com/MAY20B/problems/COVID19"
	},
	{
		month: "April", 
		year: "2020", 
		name: "COVID Pandemic and Long Queue", 
		code: "COVIDLQ", 
		url: "https://www.codechef.com/APRIL20B/problems/COVIDLQ"
	},
	{
		month: "March", 
		year: "2020", 
		name: "Pintu and Fruits", 
		code: "CHPINTU", 
		url: "https://www.codechef.com/MARCH20B/problems/CHPINTU"
	},
	{
		month: "Feb", 
		year: "2020", 
		name: "School of Geometry", 
		code: "SNUG_FIT", 
		url: "https://www.codechef.com/FEB20B/problems/SNUG_FIT"
	},
	{
		month: "Jan", 
		year: "2020", 
		name: "Breaking Bricks", 
		code: "BRKBKS", 
		url: "https://www.codechef.com/JAN20B/problems/BRKBKS"
	},
	{
		month: "Dec", 
		year: "2019", 
		name: "That is My Score", 
		code: "WATSCORE", 
		url: "https://www.codechef.com/DEC19B/problems/WATSCORE"
	},
	{
		month: "Nov", 
		year: "2019", 
		name: "Weapon Value", 
		code: "SC31", 
		url: "https://www.codechef.com/NOV19B/problems/SC31"
	}
];

function seedDB(){
   lcdiv2prob1.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
		    console.log("removed all long challenge division 2 problem 1!");
			 //add a few campgrounds
			plcdiv2prob1.forEach(function(seed){
				lcdiv2prob1.create(seed, function(err, problem){
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

module.exports = seedDB;

