var express = require('express');
var ejs = require('ejs');
var greetings = require('./scripts/greetings.js');
var readAndCount = require('./scripts/readAndCount.js');


var app = express();
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

console.log(greetings.sayHelloInEnglish());
console.log(readAndCount.readFile());

app.get('/count-words', function(req, res) {
  res.render('index');
});
app.get('/', function(req, res) {
  res.render('index');
});




var server = app.listen(app.get('port'));
console.log("express server is lintening to port "+ app.get('port'));
