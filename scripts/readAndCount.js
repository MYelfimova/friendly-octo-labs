var fs = require('fs');

//module.exports = exports  = {};
module.exports.readFile = function(){
  var arr = [], arrWords=[], arrAmount = []; words = {};
  fs.readFile('text.txt', 'utf8', function(err, text){
    text = text.replace(/(?:\r\n|\r|\n)/g, ' ');
    text = text.replace(/[.,;:]/g, '').toLowerCase();

    arr = text.split(' ');
    arrWords =  makeObjectStatistic(arr);
    //console.log(typeof(arrWords));
  });
  console.log(arrWords);
  return arrWords;
}
function makeObjectStatistic(arr){
  var mass = [], //масив, у який буду записувати об'єкти
  count = 0, idx = 0, //для тимчасових обчислень
  word = '',//поточне шукане слово
  indices = [];//індекси елементів, які вже порахувалися
  for(var i = 0; i < arr.length;){
    //обираю слово з масиву, яке ще не використовувалося
    count = 0, word = arr[i];
    var obj = {}; //об'єкт, який буду записувати у масив
    obj['word']=arr[i];//записую перше поле в масив об'єктів'
    idx = arr.indexOf(word);
    while (idx != -1) {
      indices.push(idx); count++;
      idx = arr.indexOf(word, idx + 1);
    }
    obj['quantity'] = count;
    mass.push(obj);
    //інкрементую і відповідно до того, які індекси вже були пораховані
    while(indices.includes(i)){
      i++;
    }
  }
  //console.log(mass);
  //console.log(typeof(mass));
  return mass;
}
