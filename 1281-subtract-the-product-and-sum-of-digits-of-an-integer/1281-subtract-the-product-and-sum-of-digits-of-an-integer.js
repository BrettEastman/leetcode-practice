/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  var strNumArr = n.toString().split('');
  var sum = 0;
  var product = 1;
  for (var i = 0; i < strNumArr.length; i++) {
    sum += Number(strNumArr[i]);
    product *= Number(strNumArr[i]);
  }
  return product - sum; 
};