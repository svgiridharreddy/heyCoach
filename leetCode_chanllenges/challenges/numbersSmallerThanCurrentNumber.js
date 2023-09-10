// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/

var smallerNumbersThanCurrent = function(nums) {
    
    let arr = []
    for(let i=0; i < nums.length; i++){
        let count = 0;
        let currentValue = nums[i];
        console.log(currentValue)
        for(let j=0; j < nums.length; j++){
            if(currentValue > nums[j]){
                count += 1 
            }
        }
        arr.push(count)
    }
    return arr;
};

smallerNumbersThanCurrent([6,5,4,8])