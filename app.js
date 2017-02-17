var express = require('express');
var ejs = require('ejs');
var greetings = require('./scripts/greetings.js');
var readAndCount = require('./scripts/readAndCount.js');


var app = express();
app.set('view engine', 'ejs');

/*SERVE STATIC CONTENT*/
app.use(express.static('./styles'));

app.set('port', process.env.PORT || 3000);

var collection = readAndCount.readFile();
//console.log(typeof(collection));


//
app.get('/count-words', function(req, res) {
  res.render('index', {collection: collection});
});
app.get('/', function(req, res) {
  res.render('index', {collection: {}});
});




var server = app.listen(app.get('port'));
console.log("express server is lintening to port "+ app.get('port'));
