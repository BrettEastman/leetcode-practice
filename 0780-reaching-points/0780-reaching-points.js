/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    // start with tx, ty and see if we can go backwards to sx, sy
    // Example: Input: sx = 1, sy = 1, tx = 3, ty = 5
    // while tx >= sx and ty >= sy
    while (tx >= sx && ty >= sy) {
        // if tx is equal to sx and ty is equal to ty
        if (tx === sx && ty === sy) {
            return true;
        }
        // if tx is greater than ty (3 greater than 5)
        if (tx > ty) {
            // then the previous node would be tx - ty, ty
            tx %= ty;
        } else {
            // then the previous node would be tx, ty - tx (3, 2)
            ty %= tx;
        }
        
        if (tx === sx) {
            if ((ty - sy) % sx === 0) {
                return true;
            } else {
                return false;
            }
        }
        if (ty === sy) {
            if ((tx - sx) % sy === 0) {
                return true;
            } else {
                return false;
            }
        }
    }    
    return false;
};