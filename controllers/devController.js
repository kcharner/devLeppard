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

router.post('/createTask', function(req,res) {
	query = "INSERT INTO tasks (task_name, resource, start_date, end_date) VALUES (?, ?, ?, ?)";

    connection.query(query, [req.body.task_name, req.body.resource, req.body.start_date, req.body.end_date], function(error, results, field) {
        console.log("Here's an error!");
        console.log(error);
        console.log("End error");
       	res.redirect("/myprojects");
    }); //closes line 25
}); //closes line 22

router.post('/createProject', function(req,res) {
	query = "INSERT INTO projects (project_name) VALUES (?)";

    connection.query(query, [req.body.project_name], function(error, results, field) {
        console.log("Here's an error!");
        console.log(error);
        console.log("End error");
       	res.redirect("/myprojects");
    }); //closes line 36
}); //closes line 33

//need to add route to myprojects link
router.get("/viewProjects", function(req,res) {
    
    query = "SELECT * FROM tasks";

    connection.query(query, function(error, data) {
        var sqlData = data;
        // res.send(data);
        // console.log("Here's an error!");
        // console.log(error);
        // console.log("End error");
        // console.log("controller test succesful!");
        console.log(sqlData);
        res.render("currentProjects", sqlData);
    }); //closes line 41
}); //closes line 38


router.get("/viewProjects2", function(req,res) {
    
    query = "SELECT * FROM tasks";

    connection.query(query, function(error, data) {
        var sqlData = data;
        // res.send(data);
        console.log("Here's an error!");
        console.log(error);
        console.log("End error");
        // console.log("controller test succesful!");
        console.log(sqlData);
        JSON.stringify(sqlData);
    }); //closes line 41
}); //closes line 38

//exporting
module.exports = router;