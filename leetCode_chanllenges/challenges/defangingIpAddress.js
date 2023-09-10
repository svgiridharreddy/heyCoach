var defangIPaddr = function(address) {
    let result = address.split(".").join("[.]")
    console.log(result);
    return result;
};

// defangIPaddr("1.1.1.1");


var defangIPaddr2 = function(address){
  const length = address.length;
  let result = "";
  for(let i=0; i < length; i++){
    if(address[i] === ".") result += "[.]";
    result += address[i];
  }
  console.log(result);
  return result;
}

defangIPaddr2("1.1.1.1");