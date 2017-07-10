//dependencies
var bcrypt = require("bcryptjs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require('cookie-parser');
var session = require('express-session');

//set-up server/port
var app = express();
var PORT = 3000;

//set-up sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

//require ejs to render HTML files with express
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

//this is needed for css files to work!!!!!!
app.use(express.static(path.join(__dirname, '/public')));

//start server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

//link controller files
var appController = require("./controllers/appController.js");
var userController = require("./controllers/userController.js");
var homeController = require("./controllers/homeController.js");
var devController = require("./controllers/devController.js");
var dashboardController = require("./controllers/dashboardController");

app.use("/", appController, userController, homeController, devController, dashboardController);