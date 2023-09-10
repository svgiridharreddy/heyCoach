// first the given array must be sorted.
// sort the given array using quick sort 

const quickSort = (arr,low, high) => {
  let pi = partition(arr,low,high)
  let pivot = arr[pi];
}

const binarySearch = (arr,target) => {
  let low = 0; 
  let high = arr.length-1
  let mid = Math.floor(low + (high -low)/2)
  while(low < high){
    if(arr[mid] == target){
      return mid;
    }else if(arr[mid] < target){
      low = mid+1;
    }else {
      high = mid -1
    }
  }
  return -1
}
let arr = [10,2,50,22,45,20,40]
let target = 20
binarySearch(arr,target)