class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        for(let i = 0; i<grid.length; i++){
            for(let j = 0; j<grid[0].length; j++){
                if(grid[i][j] == '1'){
                    islands++;
                    this.dfs(grid, i, j);
                }
            }
        }

        return islands;
    }

    dfs(grid, startRow, startCol){
        let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for(let i=0;i<dir.length; i++){
            let row = startRow + dir[i][0];
            let col = startCol + dir[i][1];

            if(row>=0 && col >= 0 && row<grid.length && col<grid[0].length && grid[row][col] != '0'){
                grid[row][col] = '0';
                this.dfs(grid, row, col);
            } 
        }
    }
}
