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

  module.exports = eqArrays;