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

const letterPositions = function(sentence) {
    const results = {
    };
    // logic to update results here
    for (let i = 0; i < sentence.length; i++){
        const letter = sentence[i];
        //console.log(letter);
        if(sentence[i] === ' '){
    
        } else if(results[letter]){
            results[letter].push(i);
        } else{
            results[letter] = [i];
        }
        //if (results.sentence[i]) {
            //results.sentence[i].push(i);
          //} else {
           // results[sentence[i]] = sentence[i];
          //  results[sentence[i]].push(i);
          //}
    }
    console.log(results);
    return results;
  };
letterPositions("lighthouse in the house");