const selfDividingNumbers = function(left,right){
  const result = [];
  const isDivided = (number) => {
      let str = number.toString();
      for(let i=0; i<str.length; i++){
        if(str[i] === '0' || number % Number(str[i])) return false;
      }
      return true;
  }
  for(let i=left; i<=right; i++){
    if(isDivided(i)) result.push(i); 
  }
  return result;
}