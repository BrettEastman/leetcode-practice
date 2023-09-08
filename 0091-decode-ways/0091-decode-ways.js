/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(string) {
    const length = string.length;
    string = " " + string;
    const splitString = string.split('');
    const array = new Array(length + 1).fill(0);
    array[0] = 1;
    
    for (let i = 1; i <= length; i++) {
        const firstNum = parseInt(splitString[i]);
        if (firstNum > 0 && firstNum < 10) {
            array[i] += array[i - 1];
        }
        if (i > 1) {
            const secondNum = parseInt(splitString[i - 1] * 10 + parseInt(splitString[i]));
            if (secondNum > 9 && secondNum < 27) {
                array[i] += array[i - 2];
            }
        }
    }
    return array[length];   
};