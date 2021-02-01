const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const someArray = [];
let newArray;
let tail = function(someArray) {
  newArray = someArray.slice(1);
  return newArray;
};

console.log(tail(someArray));
console.log(someArray);
assertEqual(newArray, ['4', '5', '6']);