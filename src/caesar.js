// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet =[ "a","b","c","d","e","f","g","h","i"
,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  function caesar(input, shift, encode = true) {
    // your solution code here                         
    let result = [];
    if (shift===null || shift===0 || shift < -25 || shift > 25){
       return false
    }
// sets decode mode by inverting the shift
     if (encode===false){
    shift= shift * -1
  }
    for (let i =0; i<input.length; i++){
      let char = input[i].toLowerCase()
      let idx = alphabet.indexOf(char)
      
      if (idx > -1){
        let shiftedIdx, shiftedLetter;      
        shiftedIdx = (idx + shift)
        let negShift = shiftedIdx < 0;
      
        if (shiftedIdx > alphabet.length - 1 || negShift) {
          if (negShift) {
            shiftedLetter = alphabet[shiftedIdx + alphabet.length]
          } else {
            shiftedLetter = alphabet[shiftedIdx - alphabet.length]
          }
        } else {
          shiftedLetter = alphabet[shiftedIdx]
        }
        result.push(shiftedLetter)
      } else{
        result.push(char)
      }
       //  (alphabet[25]%)
    }
 return result.join('')
  }
return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
        
        
        