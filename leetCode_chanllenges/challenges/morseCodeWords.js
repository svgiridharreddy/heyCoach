const uniqueMorseWords = function(words){
  
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let uniqueWords = new Set();
  for(let word of words){
    let str = '';
    let len = word.length
    for(let i=0; i< len; i++){
      str += morse[word.charCodeAt(i)-97]
    }
    uniqueWords.add(str);
  }
  console.log(uniqueWords.size)
  return uniqueWords.size;
}

uniqueMorseWords(["gin","zen","gig","msg"])

/* Notes: 

charCodeAt() is used to retrieve the ASCII value of a character. for lower case letter ASCII value ranges from 97(a)-122(z);

For example, if word.charCodeAt(i) is 97 (which corresponds to the letter 'a'), then word.charCodeAt(i) - 97 results in 0. This means that the Morse code for 'a' (which is ".-") is accessed from morse[0].

Similarly, if word.charCodeAt(i) is 98 (which corresponds to the letter 'b'), then word.charCodeAt(i) - 97 results in 1. This means that the Morse code for 'b' (which is "-...") is accessed from morse[1]. */