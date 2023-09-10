// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    if(nums === null || nums.length < 2){
        return 
    }
    let arr = nums
    let sortedArr = quickSort(arr,0,arr.length-1)
    console.log("sortedArr is",sortedArr)
    sums = []
    let j = arr.length-1
    for(let i=0; i<arr.length;i++){
        sums.push(arr[i] + arr[j])
        j--
    }
    
    let max = sums[0]
    for(let i=0; i< sums.length; i++){
        if(max < sums[i]){
            max = sums[i]
        }
    }
    return max
    
};


function quickSort(arr,low,high){
    if(low<high){
        let pivotIndex = partition(arr,low,high)
        quickSort(arr, low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)

    }
    return arr;

}

function partition(arr,low,high){
    let pivotElement = arr[high];
    let pivotIndex = low
    for(let i=low; i<high; i++){
        if(arr[i] < pivotElement){
            swap(arr,i,pivotIndex)
            pivotIndex++
        }
    }
    swap(arr,pivotIndex,high)
    return pivotIndex;
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
