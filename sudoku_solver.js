/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num.toString();
                        if (solveSudoku(board)) return true;
                        board[i][j] = '.'
                    }

                }
                return false;
            }
        }
    }
    return true;
};

var isValid = function (board, r, c, num) {
    for (let i = 0; i < 9; i++)
        if (board[r][i] == num || board[i][c] == num) return false;

    let boxr = Math.floor(r / 3) * 3;
    let boxc = Math.floor(c / 3) * 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (board[boxr+i][boxc+j] == num) return false;

    return true;
}