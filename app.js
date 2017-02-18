var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var readAndCount = require('./scripts/readAndCount.js').readFile;


var app = express();
app.set('view engine', 'ejs');

/*SERVE STATIC CONTENT*/
app.use(express.static('./styles'));

app.set('port', process.env.PORT || 3000);

var colltion = readAndCount();
//console.log(typeof(colltion));
//console.log(colltion);


//
app.get('/count-words', function(req, res) {
  res.render('count-words', {collection: colltion});
});
app.get('/', function(req, res) {
  res.render('index');
});




var server = app.listen(app.get('port'));
console.log("express server is lintening to port "+ app.get('port'));
