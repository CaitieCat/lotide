const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  /*assertEqual('Lighthouse Labs', 'Lighthouse Labs  ');
  assertEqual(1, 1.1);
  assertEqual(1, 1);*/

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

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);