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
let arr = [10,2,5,3,80,12,22,11]
quickSort(arr,low=0, high=arr.length-1)