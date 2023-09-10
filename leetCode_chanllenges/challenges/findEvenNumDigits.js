// return digits containing even number length;
//[12,100,77,899, 1000] => O/P: [12,77,1000] because length of o/p digits is even number;

var findNumbers = function(nums) {
    const len = nums.length;
    if(len < 1) return;
    const result = []
    for(let i=0; i< len; i++){
      if(nums[i].toString().length % 2 === 0){
        result.push(nums[i])
      }
    }
    console.log(result);
    return result.length;
};

findNumbers([12,345,2,6,7896])