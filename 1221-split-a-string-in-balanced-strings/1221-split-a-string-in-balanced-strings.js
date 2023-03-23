/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let tempR = 0;
    let tempL = 0;
    let output = 0; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            tempR++;
        }
        if (s[i] === 'L') {
            tempL++;
        }
        if (tempR === tempL) {
            output++;
            tempR = 0;
            tempL = 0;
        }
    }
    return output;  
};