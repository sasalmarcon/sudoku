function validSudoku(board) {
    for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
             const value = board[i][j].value;
             if (value !== '') {
                 if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) | !validBox(board, i, j, value)) {
                     return false;
                 }
             }
         }
     }
     return true;
 };
 
 //The row function.
 function validRow(board, row, col, value) {
     // j represents on column
     for (let j = 0; j < 8; j++) {
         // check if the current column matches the passed in column
         if (j !== col) {
             if ((board[row][j].marks.length > 0 ? board[row][j].marks[board[row][j].marks.length - 1] : board[row][j].value) === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 // The column function.
 function validColumn(board, row, col, value) {
      // j represents on row
     for (let i = 0; i < 8; i++) {
         // check if the current row matches the passed in row
         if (i !== row) {
             if ((board[i][col].marks.length > 0 ? board[i][col].marks[board[i][col].marks.length - 1] : board[i][col].value) === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 //The sub-boxes function.
 function validBox(board, row, col, value) {
     const startRow = row - (row % 3), startCol = col - (col % 3);
     
     for (let i = startRow; i < startRow + 3; i++) {
         for (let j = startCol; j < startCol + 3; j++) {
             if (i !== row && j !== col) {
                 if ((board[i][j].marks.length > 0 ? board[i][j].marks[board[i][j].marks.length - 1] : board[i][j].value) === value) {
                     return false;
                 }
             }
         }
     }
     
     return true;
 }

 export default validSudoku;