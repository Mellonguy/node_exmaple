'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  Realm = require('realm');

var app = express();

let PostSchema = {
  name: 'Post',
  properties: {
    timestamp: 'date',
    title: 'string',
    content: 'string'
  }
};

var blogRealm = new Realm({
  path: 'blog.realm',
  schema: [PostSchema]
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send("Hello Realm");
});

app.get('/write', function(req, res) {
  res.sendFile(__dirname + "/write.html");
});

// app.post('/write', function(req, res) {
//   res.send(req.body);
// });

app.post('/write', function(req, res) {
    let title = req.body['title'],
      content = req.body['content'],
      timestamp = new Date();
    blogRealm.write(() => {
      blogRealm.create('Post', {title: title, content: content, timestamp: timestamp});
    }); 
    res.sendFile(__dirname + "/write-complete.html");
  });

app.listen(3000, function() {
  console.log("Go!");
});