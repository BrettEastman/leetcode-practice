/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  if (num > 3999 || num < 1) {
    return undefined;
  }
  let result = "";
  const arrNums = [];
  let copyNum = num;
  let powOf10 = 1;

  while (copyNum > 0) {
    let remainder = copyNum % 10;
    arrNums.unshift(remainder * powOf10);
    copyNum = (copyNum - remainder) / 10;
    powOf10 *= 10;
  }

  for (let number of arrNums) {
    let currentNumeral = "";
    let times = 0;

    if (number >= 1000) {
      times = number / 1000;
      currentNumeral = "M".repeat(times);
    } else if (number === 900) {
      currentNumeral = "CM";
    } else if (number >= 500) {
      times = number / 100;
      currentNumeral = "D" + "C".repeat(times - 5);
    } else if (number === 400) {
      currentNumeral = "CD";
    } else if (number >= 100) {
      times = number / 100;
      currentNumeral = "C".repeat(times);
    } else if (number === 90) {
      currentNumeral = "XC";
    } else if (number >= 50) {
      times = number / 10;
      currentNumeral = "L" + "X".repeat(times - 5);
    } else if (number === 40) {
      currentNumeral = "XL";
    } else if (number >= 10) {
      times = number / 10;
      currentNumeral = "X".repeat(times);
    } else if (number === 9) {
      currentNumeral = "IX";
    } else if (number >= 5) {
      currentNumeral = "V" + "I".repeat(number - 5);
    } else if (number === 4) {
      currentNumeral = "IV";
    } else {
      currentNumeral = "I".repeat(number);
    }

    result += currentNumeral;
  }
  return result;
};