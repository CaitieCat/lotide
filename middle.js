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
  middle([1, 2, 3, 4, 5, 6, 7]);