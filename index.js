'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("Hello Realm");
});

app.listen(3000, function() {
  console.log("Go!");
});