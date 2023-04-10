/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    for (let i = left; i <= right; i++){
        let digits = [];
        let selfDividable = true;
        if (i < 10) {
          result.push(i);
          continue;
        }
        if (i % 10 === 0) {
          continue;
        }
        if (i > 10) {
            let currentArr = JSON.stringify(i).split('')
            for (digit of currentArr) {
              digits.push(Number(digit))
            }
            if (digits.includes(0)) {
              selfDividable = false;
              continue;
            }
        }
        if (!selfDividable) {
            continue;
        }
        for (let j = 0; j < digits.length; j++) {
            if (i % digits[j] !== 0) {
                selfDividable = false;
                continue;
            } 
        }
        if (selfDividable) {
          result.push(i);
        }
    }
    return result;
};

