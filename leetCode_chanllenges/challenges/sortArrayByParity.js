var sortArrayByParity = function(nums) {
    if(nums.length < 1 || nums.length >5000) return [];
    let evenArr = [];
    let oddArr = [];

    for(let i=0; i< nums.length; i++){
        if(nums[i] % 2 === 0){
            evenArr.push(nums[i])
        }else {
            oddArr.push(nums[i])
        }
    }
    return evenArr.concat(oddArr);
};

sortArrayByParity([3,1,2,4])
sortArrayByParity([0])