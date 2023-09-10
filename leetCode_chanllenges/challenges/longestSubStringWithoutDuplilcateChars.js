const lengthOfLongestSubstring = function(s){
  let obj = {}
  let max = 0;
  let start = 0;
  let end = 0;

  while(start < s.length){
    let char = obj[s[start]];
    if(char === undefined){
      if(start-end+1 > max){
        max = start-end+1
      }
      obj[s[start]] = s[start]
      start++;
    }else {
      delete obj[s[end]]
      end++;
    }
  }
  return max

}



// find the max length of the substring without duplicate characters 