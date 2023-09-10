function insertionSort(arr){
  if( arr === null || arr.length < 1) return 
  for(let i=1;i<arr.length;i++){
    let currentElement = arr[i];
    let j = i-1;
    while(j>=0 && arr[j] > currentElement){
      arr[j+1] = arr[j]
      j--;
    }
  }
  console.log(arr)
  return arr;
}
let arr = [10,2,3,5,20,19,22,18]
insertionSort(arr)

