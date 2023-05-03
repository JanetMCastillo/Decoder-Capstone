// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const alphabetStr = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = [];
 
  function substitution(input, alphabet, encode = true) {

    //All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
    const checkForRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) 
      return false;
        
    alphabet.split("");
    if (encode)  {
      for (let i = 0; i < 26; i++)  {
        result[alphabetStr[i]] = alphabet[i];
        
      }
    } else{
      for (let i = 0; i < 26; i++){
        result[alphabet[i]] = alphabetStr[i];
      }
    }
    //Spaces should be maintained throughout.
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return result[letter]
    });
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
