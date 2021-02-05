const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  assertEqual('Lighthouse Labs', 'Lighthouse Labs  ');
  assertEqual(1, 1.1);
  assertEqual(1, 1);

const findKey = function(object, callback){
    for(const each in object){
        //console.log(each);
        //console.log(Object.keys(object[each]));
        if(callback(object[each]) === true){
            return each;
        }
    }
}

console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2));