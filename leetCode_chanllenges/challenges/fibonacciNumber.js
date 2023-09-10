const fib = function(n){
  if(n<=1) return n;
  const result = fib(n-1) + fib(n-2)
  return result
}

fib(8);

const fib1 = function(n){
  let result = {}
  if(n<=1) return n;
  if(result[n]){
    return result[n];
  }
  result[n] = fib1(n-1) + fib1(n-2);
  return result[n]
}

// fib1(10)