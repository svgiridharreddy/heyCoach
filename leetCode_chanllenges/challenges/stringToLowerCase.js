var toLowerCase = function(s) {
    const len = s.length;
    if(len < 1 || len >100){
      return ;
    }
    return s.toLowerCase()
};

toLowerCase("heLLo");


var toLowerCase2 = function(s){
  let result = "";
  const len = s.length;
  for(let i = 0; i < len; i++){
    let charcater = s.charCodeAt(i);
    if(charcater >= 65 && charcater <= 90){
      result += String.fromCharCode(charcater + 32)
    }else {
      result += s[i]
    }
  }
  return result;
}
