function twoSum(nums, target){
  let obj = {}
  let len = nums.length
  for(let i = 0; i < len; i++){
    let diff = target - nums[i];
    if(obj.hasOwnProperty(diff) && obj.hasOwnProperty(diff) !== i){
      return [i, nums[diff]]
    }
    nums[i] = i
  }
  return null;
}
let nums = [2,7,11,15]
let target = 9
twoSum(nums,target)