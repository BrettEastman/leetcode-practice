/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  // create number of steps var
  var numOfSteps = 0;
  // use while loop
  while (num > 0) {
    // check to see if even
    if (num % 2 === 0) {
      // if so, divide in half
      num /= 2;
      // increment steps
      numOfSteps++;
    } else {
    // otherwise
      // decrement by 1
      num -= 1;
      // increment steps
      numOfSteps++;
    }
  }
  // return num of steps
  return numOfSteps;  
};