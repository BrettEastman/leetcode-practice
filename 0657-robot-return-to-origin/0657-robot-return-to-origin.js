/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let leftRight = 0;
    let upDown = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            upDown++;
        } else if (moves[i] === 'D') {
            upDown--;
        } else if (moves[i] === 'L') {
            leftRight++;
        } else if (moves[i] === 'R') {
            leftRight--;
        }
    }
    if (leftRight === 0 & upDown === 0) {
        return true;
    } else {
        return false;
    }  
};