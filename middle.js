const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


  const middle = function(list){
      if(list.length % 2 === 0) {
        let index = list.length / 2;
        list = list.slice(index - 1, index + 1);
      } else {
        let index = Math.floor(list.length / 2);
        list = list.slice(index, index + 1);
      }
      console.log(list);
  }

  module.exports = middle;