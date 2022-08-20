/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var newString = '';
    for (var i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            newString += '[.]';
        } else {
            newString += address[i];
        }
    }
    return newString;
};