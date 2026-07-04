class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int minTime = 0;
        int fresh = 0;
        queue<pair<int, int>> q;

        // Traverse.
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j] == 2) {
                  q.push({i, j});
                }
                if(grid[i][j] == 1) {
                    fresh++;
                }
            }
        }


        // bfs logic
        while(!q.empty() && fresh>0) {
            minTime++;
            int size = q.size();
            vector<pair<int, int>> dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
            for(int i=0; i<size; i++) {
                pair<int, int> point = q.front();
                q.pop();
                for(auto [dr, dc]: dir){
                    int row = point.first + dr; 
                    int col = point.second + dc;
                    
                    if(row>=0 && col>=0 && row<grid.size() && col<grid[0].size() && grid[row][col] != 0) {
                        if(grid[row][col] == 1){
                            q.push({row, col});
                            fresh--;
                            grid[row][col] = 2;
                        }
                    }
                }
            }
            
        }


        return fresh == 0 ? minTime : -1;
    }

};
