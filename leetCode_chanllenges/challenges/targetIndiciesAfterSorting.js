//https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    if(nums === null || nums.length === 0){
        return;
    }
    if(nums.length === 1){
        nums[0] === target ? [0] : [] 
      }
    let low = 0;
    let high = nums.length -1
    // let sortedArray = quickSort(nums,low,high)
    // console.log("sortedArray is",sortedArray)
    quickSort(nums,low,high)
    let indices = []
      for(let i=0; i < nums.length; i++){
          if(nums[i] === target){
              indices.push(i)
          }
      }
      return indices
    
};
const quickSort = (arr,low,high) =>{
        if(arr === null || arr.length < 2) return;
        if(low < high) {
            let pivotIndex = partition(arr,low,high);
            quickSort(arr,low,pivotIndex-1);
            quickSort(arr,pivotIndex+1, high) 
        }
        return arr
}

// [10,20,3,2,4,5,22,15]
function partition(arr,low,high){
    let pivot = arr[high];
    let pivotIndex = low;  
    for(let i=low; i < high; i++){
        if(arr[i] < pivot){
            swap(arr, i, pivotIndex)
            pivotIndex++; 
        }
    }
    swap(arr,pivotIndex,high)
    return pivotIndex;
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}