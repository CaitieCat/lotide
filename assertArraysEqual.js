const eqArrays = require('./eqArrays');

const assertArraysEqual = function(oneArray, twoArray) {
  if (eqArrays(oneArray, twoArray) === true) {
    console.log('✅✅✅ Assertion Passed');
  } else {
    console.log('❌❌❌ Assertion Failed');
  }
};

module.exports = assertArraysEqual;