const eqArrays = function(arrayOne, arrayTwo){
    let result = false;
    if (arrayOne.length === arrayTwo.length){  
    for (let i = 0; i < arrayOne.length; i++){
        if (arrayOne[i] === arrayTwo[i]){
            result = true;
        }
        if (arrayOne[i] !== arrayTwo[i]){
            result = false;
        }
      }
    }
    else{
        result = false;
    }  
    return result;  
  }

const assertArraysEqual = function(oneArray, twoArray){
    if(eqArrays(oneArray, twoArray) === true){
        console.log('✅✅✅ Assertion Passed');
    }
    else{
        console.log('❌❌❌ Assertion Failed');
    }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);