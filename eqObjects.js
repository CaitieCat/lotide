const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };

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

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4], true));

  const eqObjects = function(objectOne, objectTwo){
    const keysOne = Object.keys(objectOne);
    const keysTwo = Object.keys(objectTwo);
    if(keysOne.length === keysTwo.length){
      for(const each of keysOne){
          if(objectOne[each] === objectTwo[each]){

          } else if(Array.isArray(objectOne[each]) && Array.isArray(objectTwo[each])){
              if(eqArrays(objectOne[each], objectTwo[each])){
                  return true;
              } else {
                  return false;
              }
          } 
          else if (objectOne[each] !== objectTwo[each]){
              return false;
          }
      }
      return true; 
    } else {
        return false;
      }
  }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: ["1"], d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false