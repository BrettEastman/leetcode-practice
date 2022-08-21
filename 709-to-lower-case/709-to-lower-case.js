/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[i]) {
            newString += s[i].toLowerCase();
        } else {
            newString += s[i];
        }
    }
    return newString;
};