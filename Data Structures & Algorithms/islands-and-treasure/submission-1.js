class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        for(let i=0; i<grid.length; i++){
            for(let j=0; j<grid[0].length; j++){
                if(grid[i][j] == 0){
                    this.dfs(grid, i, j);
                }
            }
        }
    }

    dfs(grid, startRow, startCol){
        let MAX = 2147483647;
        let dir = [[-1,0], [1, 0], [0,-1], [0,1]];
        for(let i=0;i<dir.length; i++){
            let row = startRow + dir[i][0];
            let col = startCol + dir[i][1];

            if(row>=0 && col>=0 && row<grid.length && col<grid[0].length && grid[row][col] != -1){
                let curr = grid[startRow][startCol] + 1
                if(grid[row][col] > curr){
                    grid[row][col] = curr;
                    this.dfs(grid, row, col);
                }
            }
        }
    }
}
