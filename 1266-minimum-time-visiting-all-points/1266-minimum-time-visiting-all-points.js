/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        let current = points[i - 1];
        let next = points[i];
        count += Math.max(Math.abs(next[0] - current[0]), Math.abs(next[1] - current[1]))
    }
    return count;
};