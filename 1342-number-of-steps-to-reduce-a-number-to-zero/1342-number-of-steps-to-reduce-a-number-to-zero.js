/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  var numOfSteps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      numOfSteps++;
    } else {
      num -= 1;
      numOfSteps++;
    }
  }
  return numOfSteps;  
};