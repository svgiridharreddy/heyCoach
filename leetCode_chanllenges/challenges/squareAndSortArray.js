var sortedSquares = function(nums) {
    let len = nums.length;
    for(let i= 0; i < len; i++){
        nums[i] = nums[i] * nums[i]
    }
    let swap = false;
    while(!swap){
        swap = true;
        for(let i=0; i<len; i++){
            if(nums[i] > nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                swap = false;
            }
        }
    }
    return nums;
};

sortedSquares([-4,-1,0,3,10])