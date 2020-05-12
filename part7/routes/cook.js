var express    = require("express");
var router     = express.Router();

// To the COOK OFF
router.get("", function(req,res){
	res.render("problems/cook");
});

module.exports = router;