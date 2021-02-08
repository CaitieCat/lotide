const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log(tail([3, 4, 5, 6]));
//console.log(newArray);
let array = [4, 5, 6];
let resultArray = [3, 4, 5, 6];
let result = tail(resultArray);
//assertEqual(tail([3, 4, 5, 6]), [4, 5, 6]);
assertEqual(result[0], array[0]);
assertEqual(result[1], array[1]);
assertEqual(result[2], array[2]);
assertEqual(resultArray.length, 4);
