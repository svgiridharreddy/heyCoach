//with modifying input array;
var reverseString1 = function(s){
    let left = 0; right = s.length-1;
    while(left < right){
      [s[left], s[right]] = [s[right], s[left]]
      left ++;
      right --;
    }
    return s;
}

reverseString1(['h','e','l','l','o'])


// without modifying input array
var reverseString = function(s) {
    const len = s.length
    const result = []
    for(let i=len-1; i>=0; i--){
        result.push(s[i])
    }
    console.log(result);
    return result;
};
reverseString(['h','e','l','l','o'])