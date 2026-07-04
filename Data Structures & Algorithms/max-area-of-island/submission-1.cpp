class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int maxArea = 0;
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j]==1){
                   int tempArea = dfs(grid, i, j);
                   if(maxArea < tempArea) {
                    maxArea = tempArea;
                   }
                }
            }
        }

        return maxArea;
    }

    int dfs(vector<vector<int>>& grid, int startRow, int startCol) {
        int tArea = 1;
        vector<pair<int, int>> dir = {{-1, 0},{1, 0},{0, -1},{0, 1}};
        grid[startRow][startCol]=0;
        for(auto [dr, dc]: dir){
            int row = startRow + dr;
            int col = startCol + dc;
            if(row>=0 && col>=0 && row<grid.size() && col<grid[0].size() && grid[row][col]==1){
                tArea += dfs(grid, row, col);
            }
        }

        return tArea;
    }
};
