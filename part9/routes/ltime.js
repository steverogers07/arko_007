var express    = require("express");
var router     = express.Router();

// To the LUNCH TIME
router.get("", function(req,res){
	res.render("problems/ltime");
});

module.exports = router;