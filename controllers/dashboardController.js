//dependencies\
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require("body-parser");
var connection = require('../config/connection.js');

// get request to dashboard
router.get('/dashboard', function(req,res) {
  res.render('dashboard');
});

router.get('/myprojects', function(req,res) {
  res.render('myProjects');
});

router.get('/contactclient', function(req,res) {
  res.render('clientContact');
});

router.get('/search', function(req,res) {
  res.render('clients');
});

//exporting
module.exports = router;