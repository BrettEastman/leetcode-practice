/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let tempSum = 0, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i], next = nums[i + 1];
        if (curr > tempSum) {
            tempSum = curr;
            if (sum < tempSum) sum = tempSum;
        }
        if (next > curr) {
            tempSum += next;
            if (tempSum > sum) sum = tempSum;
        } else if (next == curr) {
            tempSum = next;
            if (tempSum > sum) sum = tempSum;
        } else if (next < curr) {
            tempSum = next;
            if (tempSum > sum) sum = tempSum;
        }
    }
    return sum;
};