/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let reversed = [];
    let inverted = [];
    for (let i = 0; i < image.length; i++) {
        reversed.push(image[i].reverse());
    }
    for (let j = 0; j < reversed.length; j++) {
        let currentArr = reversed[j];
        let tempArr = [];
        for (let k = 0; k < currentArr.length; k++) {
            if (currentArr[k] === 0) {
                tempArr.push(1);
            } else {
                tempArr.push(0);
            }
        }
        inverted.push(tempArr);
    }
    return inverted;   
};