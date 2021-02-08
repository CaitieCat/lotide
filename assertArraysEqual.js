const eqArrays = require('./eqArrays');

const assertArraysEqual = function(oneArray, twoArray) {
  if (eqArrays(oneArray, twoArray) === true) {
    console.log('✅✅✅ Assertion Passed');
    return true;
  } else {
    console.log('❌❌❌ Assertion Failed');
    return false;
  }
};

module.exports = assertArraysEqual;