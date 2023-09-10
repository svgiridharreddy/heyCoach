// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/


var minimumSum = function(num) {
    let temp = num.toString().split("").sort();
    console.log(temp[0],temp[1],temp[2],temp[3])
    return(parseInt(temp[0] + temp[2]) + parseInt(temp[1] + temp[3]))
};

minimumSum(2932)