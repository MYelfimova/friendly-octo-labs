var fs = require('fs');

module.exports = exports  = {};
exports.readFile = function(){
  var textContent = '';
  fs.readFile('text.txt', 'utf8', function(err, text){
    console.log(text);
    textContent = text;
  });
  return textContent;
}
