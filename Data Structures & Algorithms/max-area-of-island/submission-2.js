class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
     dfs(grid, startRow, startCol){
        var area = 1;
        var dir=[[-1, 0], [1, 0], [0, -1], [0, 1]];
        grid[startRow][startCol] = 0;
        for(var i=0;i<4;i++){
            var row = startRow + dir[i][0];
            var col = startCol + dir[i][1];

            if(row>=0 && col >= 0 && col<grid[0].length && row<grid.length && grid[row][col] ==1){
               area += this.dfs(grid, row, col);
            }
        }

        return area;
    }
    maxAreaOfIsland(grid) {
        var maxArea = 0;
        for(var i=0; i<grid.length; i++){
            for(var j=0; j<grid[0].length; j++){
                if(grid[i][j] ==1) {
                    var tempArea = this.dfs(grid, i, j);
                    if(tempArea > maxArea) maxArea = tempArea;
                }
            }
        }


        return maxArea;
    }
}
