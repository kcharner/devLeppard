//dependencies
var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require("body-parser");
var connection = require('../config/connection.js');

//set-up routing for user-related actions
var router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// additional variables for access later
var query;

//post request to create new account
router.post('/newUser', function(req,res) {
	query = "SELECT * FROM users WHERE email = ?"

  	connection.query(query, [req.body.email], function(err, response) {
      	console.log(response);
        console.log(err);
      	if (response.length > 0) {
        		res.send("We already have a user associated with that email!")
      	} else {

      		  bcrypt.hash(req.body.password, 10, function(err, hash) {
                console.log(hash);
        		    query = "INSERT INTO users (first_name, email, password, user_type) VALUES (?, ?, ?, ?)";

        		    connection.query(query, [req.body.first_name, req.body.email, hash, req.body.user_type], function(error, results, field) {
          		      var user = req.body.user_type;
                    if (user == "Client") {
                      res.redirect("home"); 
                    } else if (user == "Developer"){
                      res.redirect("dashboard");
                    } //closes line 43
                    // res.redirect("/");
        	      }); //closes line 40
      	    }); //closes line 36
        } //closes line 34
    }) //closes line 29
}); //closes line 26

//post request to login into application
router.post('/login', function(req, res) { 
    var query = "SELECT * FROM users WHERE email = ?";
    connection.query(query, [req.body.email], function(err, response) {
      
      if (response.length == 0) {
        res.redirect("/")
      } else if (response.length > 0) {
          bcrypt.compare(req.body.password, response[0].password, function(err, result) {
              if (result == true ) { 
                  var user = response[0].user_type;  
                  console.log("hi");  
                  req.session.logged_in = true;
                  req.session.first_name = response[0].first_name;
                  req.session.email = response[0].email;
                  req.session.user_type = response[0].user_type;

                  if (user == "Client") {
                      res.redirect("home"); 
                  } else if (user == "Developer"){
                      res.redirect("dashboard");
                  }
              } else {
                  res.redirect("/");
              }
          });
      } 
    }); 
}); 

//get request to terminate user session
router.get('/signOut', function(req,res) {
  req.session.destroy(function(err) {
      console.log("Here's an error!");
      console.log(err);
      console.log("End error");
     res.redirect('/')
  })
});

//exporting
module.exports = router;




