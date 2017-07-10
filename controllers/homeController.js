//dependencies\
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require("body-parser");
var connection = require('../config/connection.js');

// get request to homepage

router.get('/home', function(req,res) {
  res.render('home');
});

router.get('/view', function(req,res) {
  res.render('viewProject');
});

router.get('/contact', function(req,res) {
  res.render('contact');
});

router.get('/form', function(req,res) {
  res.render('projectForm');
});

//exporting
module.exports = router;