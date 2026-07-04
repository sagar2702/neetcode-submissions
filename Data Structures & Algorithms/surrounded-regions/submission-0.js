class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        // find all boarder 0's surrounding.
        for(let i=0; i<cols; i++){
            if(board[0][i] == 'O') {
                this.dfs(board, 0, i);
            }
            if(board[rows-1][i] == 'O') {
                this.dfs(board, rows-1, i);
            }
        }

        for(let i=0; i<rows; i++){
            if(board[i][0] == 'O') {
                this.dfs(board, i, 0);
            }
            if(board[i][cols-1] == 'O') {
                this.dfs(board, i, cols-1);
            }
            
        }
        for(let i=0;i<board.length; i++){
            for(let j=0;j<board[0].length; j++){
                if(board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
                if(board[i][j] == '#'){
                    board[i][j] = 'O';
                }
            }
        }
    }

    dfs(board, startRow, startCol){
        board[startRow][startCol] ='#';
        let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for(let i = 0 ; i<dir.length; i++){
            let row = startRow + dir[i][0];
            let col = startCol + dir[i][1];
            if(row>=0 && col>=0 && row<board.length && col<board[0].length){
                if(board[row][col] == 'O') {
                    this.dfs(board, row, col);
                }

            }

        }
        
    }
}
