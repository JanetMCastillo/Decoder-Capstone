// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const numbers=['11','21','31','41','51','12','22','32','42','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55']
  const alphabet =[ "a","b","c","d","e","f","g","h","i","j"
,"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
  
  function polybius(input, encode = true) {
    // your solution code here
    if( encode=== true){
      let result= []
    for (let i=0; i< input.length; i++){
      if (input[i] === ' '){
        result.push(' ')
      }
      let char = input[i].toLowerCase() //this gives you the letter of what is in the input
      let idx = alphabet.indexOf(char) //this gives you the index (a number) of the letter in the alphabet
      let codeNumber=numbers[idx] // gives the number for the numbers index that matches the number and letter?
    
        result.push(codeNumber)   
    }
          return result.join('')
  }
    if (encode === false){
     let remainder= input.split(' ').join('').length % 2
    if(remainder !== 0){
      return false
    }
    let result= []
      
      for (let i=0; i< input.length; i = i + 2){
      if (input[i] === ' '){
        i++
        result.push(' ')
      }
    let codeNumber = input.substring(i, i + 2)
    let numberIdx = numbers.indexOf(codeNumber)
    let letter= alphabet[numberIdx]
    if (letter === 'i' || letter === 'j'){
        result.push("(i/j)")
    }
        result.push(letter)
      }
      return result.join('')
  }
    
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
