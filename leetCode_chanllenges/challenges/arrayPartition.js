//https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

    let sortedArray = quickSort(nums,low=0,high=nums.length-1)
    console.log(sortedArray)
    let sum = 0
    for(let i=0; i<sortedArray.length;i+=2){
        sum += sortedArray[i]
    }
    console.log(sum)
    return sum;
};

const quickSort = (nums,low,high) => {
    if(nums === null || nums.length < 2){
        return arr;
    }
    if(low < high){
        let pivotIndex = partition(nums,low,high)
        quickSort(nums,low,pivotIndex-1)
        quickSort(nums,pivotIndex+1, high)
    }
    return nums
}


const partition = (nums,low,high) => {
    let pivot = nums[high]
    let pivotIndex = low;
    while(low < high){
        for(let i=pivotIndex;i<high; i++){
            if(nums[i] < pivot){
                swap(nums,i,pivotIndex)
                pivotIndex ++;
            }
        }
        swap(nums,pivotIndex,high)
        return pivotIndex;
    }
}

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
    return arr
}