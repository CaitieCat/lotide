const eqArrays = function(arrayOne, arrayTwo) {
    let result = false;
    if (arrayOne.length === arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] === arrayTwo[i]) {
          result = true;
        }
        if (arrayOne[i] !== arrayTwo[i]) {
          result = false;
        }
      }
    } else {
      result = false;
    }
    return result;
  };
  
  const assertArraysEqual = function(oneArray, twoArray) {
    if (eqArrays(oneArray, twoArray) === true) {
      console.log('✅✅✅ Assertion Passed');
    } else {
      console.log('❌❌❌ Assertion Failed');
    }
  };
  assertArraysEqual([1, 2, 3], [1, 2, 3]);

  const without = function(source, itemsToRemove) {
    let finalArray = [];
    for (i = 0; i < source.length; i++){
        if (itemsToRemove.includes(source[i]) === false){
          finalArray.push(source[i]);
        }
    }
    console.log(finalArray);
  }
  without([1, 2, 3, 5, 6, 7, 8], [2, 5, 8]);