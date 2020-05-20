var express        = require("express"),
	app            = express(),
	bodyParser     = require("body-parser"),
    mongoose       = require('mongoose'),
	flash		   = require("connect-flash"),
    // lcdiv2prob1    = require('./models/lcdiv2prob1'),
	passport       = require("passport"),
	Localstrategy  = require("passport-local"),
	methodOverride = require("method-override"),
	User           = require("./models/user");

              //  seeding variables
// LONG CHALLENGE
var seedlcdiv2prob1    = require('./seed/lcdiv2prob1'),
	seedlcdiv2prob2    = require('./seed/lcdiv2prob2'),
	seedlcdiv2prob3    = require('./seed/lcdiv2prob3'),
	seedlcdiv2prob4    = require('./seed/lcdiv2prob4'),
	seedlcdiv2prob5    = require('./seed/lcdiv2prob5'),
	seedlcdiv2prob6    = require('./seed/lcdiv2prob6'),
	seedlcdiv2prob7    = require('./seed/lcdiv2prob7'),
	seedlcdiv2prob8    = require('./seed/lcdiv2prob8');

// requiring routes
var indexRoutes		 = require("./routes/index"),
	challengeRoutes  = require("./routes/challenge"),
	cookRoutes       = require("./routes/cook"),
	ltimeRoutes      = require("./routes/ltime");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('useUnifiedTopology',true);
mongoose.set('useFindAndModify', false);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/arko_part9",{useNewUrlParser: true});
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// SEED THE DATABASE
// seedlcdiv2prob1();
// seedlcdiv2prob2();
// seedlcdiv2prob3();
// seedlcdiv2prob4();
// seedlcdiv2prob5();
// seedlcdiv2prob6();
// seedlcdiv2prob7();
// seedlcdiv2prob8();

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
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use("/", indexRoutes);
app.use("/challenge", challengeRoutes);
app.use("/cook", cookRoutes);
app.use("/ltime", ltimeRoutes);

app.listen(3000,() => {
	console.log("Server Has Started");
});