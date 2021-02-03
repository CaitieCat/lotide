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

  const findKeyByValue = function(object, value){
    let keys = Object.keys(object);
    for(const each of keys){
      if (object[each]=== value){
        return each; 
      }
    }
  }

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);