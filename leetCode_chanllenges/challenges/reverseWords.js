var reverseWords = function(s) {
    let sentenceArr = s.split(" ")
    const len = sentenceArr.length
    let result = []
    for(let i=0; i < len; i++){
      let word = sentenceArr[i];
      let reversedWord = ""
      for(let j=word.length-1; j>=0; j--){
          reversedWord += word[j];
      }
      result.push(reversedWord)
    }
    return result.join(" ")
};

reverseWords("Let's take LeetCode contest")