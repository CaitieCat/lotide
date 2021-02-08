const assertEqual = require('./assertEqual');

const head = function(someArray) {
  let element = someArray[0];
  return element;
};

module.exports = head;