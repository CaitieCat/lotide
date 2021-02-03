const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letters = {

  };
  for (const charAt of string) {
    if (letters[charAt]) {
      letters[charAt] += 1;
    } else if (charAt === ' ') {
    } else {
      letters[charAt] = 1;
    }
  }
  return letters;
};
console.log(countLetters("lighthouse in the house"));