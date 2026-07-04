class Solution {
public:
    void islandsAndTreasure(vector<vector<int>>& grid) {
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j]==0){
                    dfs(grid, i, j);
                }
            }
        }
    }

    void dfs(vector<vector<int>>& grid, int startRow, int startCol){
        int MAX = 2147483647;
        vector<pair<int, int>> dir = {{-1,0}, {1,0}, {0, -1}, {0, 1}};
        for(auto [dr, dc]: dir){
            int row = startRow + dr;
            int col = startCol + dc;
            if(row>=0 && col>=0 && row<grid.size() && col<grid[0].size() && grid[row][col] != -1) {
               if(grid[row][col]>grid[startRow][startCol]+1){
                    grid[row][col] = grid[startRow][startCol] + 1;
                    dfs(grid, row, col);
               }
            }
        }
    }
};
