var express        = require("express"),
	app            = express(),
	bodyParser     = require("body-parser"),
    mongoose       = require('mongoose'),
    lcdiv2prob1    = require('./models/lcdiv2prob1'),
	passport       = require("passport"),
	Localstrategy  = require("passport-local"),
	User           = require("./models/user"),
    seedDB         = require('./seed');

// requiring routes
var indexRoutes		 = require("./routes/index"),
	challengeRoutes  = require("./routes/challenge"),
	cookRoutes       = require("./routes/cook"),
	ltimeRoutes      = require("./routes/ltime");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('useUnifiedTopology',true);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/arko_part5",{useNewUrlParser: true});
//seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

app.use("/", indexRoutes);
app.use("/challenge", challengeRoutes);
app.use("/cook", cookRoutes);
app.use("/ltime", ltimeRoutes);

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

app.listen(3000,() => {
	console.log("Server Has Started");
});