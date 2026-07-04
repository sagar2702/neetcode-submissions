class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int islands = 0;
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j]=='1'){
                    islands++;

                    dfs(grid, i, j);
                }
            }
        }

        return islands;
    }

    void dfs(vector<vector<char>>& grid, int startRow, int startCol){
        vector<pair<int, int>> dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        grid[startRow][startCol]='0';
        for(auto [dr, dc]: dir){
            int row = startRow + dr;
            int col = startCol + dc; 
            if(row>=0 && col >=0 && row<grid.size() && col<grid[0].size() && grid[row][col] == '1' ){
                dfs(grid, row, col);
            }
        }
    }
};
