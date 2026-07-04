class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minTime = 0;
        let freshCount = 0;
        let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let queue = [];

        for(let i=0;i<grid.length; i++){
            for(let j=0;j<grid[0].length; j++){
                if(grid[i][j] == 1){
                    freshCount++;
                }
                if(grid[i][j]==2){
                    queue.push([i, j]);
                }
            }
        }


        while(queue.length !=0 && freshCount > 0){
            minTime++;
            let size = queue.length;
            for(let q = 0; q < size; q++){
                let front = queue.shift();
                for(let i=0; i<dir.length; i++){
                    let row = dir[i][0] + front[0];
                    let col = dir[i][1] + front[1];
                    
                    if(row>=0 && col>=0 && row<grid.length && col<grid[0].length){
                        if(grid[row][col] == 1){
                            freshCount--;
                            grid[row][col] = 0;
                            queue.push([row, col]);
                        }
                    }
                }
            }
            
        }

        return freshCount > 0 ? -1 : minTime;

    }


}
