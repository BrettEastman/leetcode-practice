/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    let mRows = grid.length;
    let nColumns = grid[0].length;
    let direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    
    const dfs = function(i, j) { 
        grid[i][j] = 2;
        let r, c;
        for (let dir of direction) {
            r = i + dir[0];
            c = j + dir[1];
            if (r >= 0 && r < mRows && c >= 0 && c < nColumns && grid[r][c] == 1) {
                dfs(r, c);
            }
        }
        return;
    };
    
    for (let i = 0; i < mRows; i++) {
        for (let j = 0; j < nColumns; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j);
                islands++;
            }            
        }
    }
    return islands;   
};