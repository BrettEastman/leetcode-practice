/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // make arrs of params
    let jewelsArr = jewels.split('');
    let stonesArr = stones.split('');
    let jewelsCount = 0;
    // loop through stonesArr
    for (let i = 0; i < stonesArr.length; i++) {
        // loop through jewelsArr to check whether each is in stonesArr
        for (let j = 0; j < jewelsArr.length; j++) {
            if (jewelsArr[j] === stonesArr[i]) {
                // if so, add one to jewels count
                jewelsCount++;
            }
        }
    }       
    // return jewels count
    return jewelsCount;
};