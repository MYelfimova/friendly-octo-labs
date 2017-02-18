var fs = require('fs');

module.exports.readFile = function(){
  var arr = [], arrWords=[], arrAmount = []; words = {};
  var text = fs.readFileSync('text.txt', 'utf8');
  text = text.replace(/(?:\r\n|\r|\n)/g, ' ');
  text = text.replace(/[.,;:]/g, '').toLowerCase();

  arr = text.split(' ');
  arrWords =  makeObjectStatistic(arr);
  return arrWords;
}
function makeObjectStatistic(arr){
  var mass = [], //the array of objects (word - quantity)
  count = 0, idx = 0, //for temporary calculations
  word = '',//current word I am looking for
  indices = [];//indices of element I have already counted
  for(var i = 0; i < arr.length;){
    //pick a word from an array that yet has not been used
    count = 0, word = arr[i];
    var obj = {}; //create an object that a will later push to the array
    obj['word']=arr[i];//write firs proterty of the object
    idx = arr.indexOf(word);
    while (idx != -1) {
      indices.push(idx); count++;
      idx = arr.indexOf(word, idx + 1);
    }
    obj['quantity'] = count;
    mass.push(obj);
    //increment i according to the unused indices
    while(indices.includes(i)){
      i++;
    }
  }
  return mass;
}
