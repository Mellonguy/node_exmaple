'use strict';

let express = require('express');
let bodyparser = require('body-parser');

let app = express();

/**
 * body parser start
 */
app.use(bodyparser.urlencoded({extended:true}));

app.post('/write',(req,res)=>{
    res.send(req.body);

});

/**
 * body parser end
 */

app.get('/', function(req, res) {
  res.send("Hello Realm");
});
 

app.get('/write',(req,res)=>{
    res.sendFile(__dirname+'/write.html')
});
 

app.listen(3000, function() {
  console.log("Go!");
});