/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j];
            let difference = secondNum - firstNum;
            if (difference > result && difference > 0) {
                result = difference;
            }
        }
    }
    return result;
};