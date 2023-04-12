class Solution(object):
    def numIslands(self, grid):
        islands = 0
        mRows = len(grid)
        nColumns = len(grid[0])
        direction = [[0, -1], [1, 0], [0, 1], [-1, 0]]
        
        def dfs(grid, i, j):
            grid[i][j] = '0'
            for dir in range(len(direction)):
                r = i + direction[dir][0]
                c = j + direction[dir][1]
                if r < 0 or c < 0 or r >= mRows or c >= nColumns or grid[r][c] == '0':
                    continue
                dfs(grid, r, c)
            return
        
        for i in range(mRows):
            for j in range(nColumns):
                if grid[i][j] == '1':
                    dfs(grid, i, j)
                    islands += 1
                    
        return islands

        