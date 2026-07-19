function check(row_idx, col_idx, n, board) {
    //check row
    for (let col = 0; col < col_idx; col++) {
        if (board[row_idx][col] == 1) {
            return false;
        }
    }

    //check upper diagonal
    let i = row_idx, j = col_idx;
    while (i >= 0 && j >= 0) {
        if (board[i][j] == 1) {
            return false;
        }
        i -= 1;
        j -= 1;
    }

    //check diagonal 2
    i = row_idx, j = col_idx;
    while (i < n && j >= 0) {
        if (board[i][j] == 1) {
            return false;
        }
        i += 1;
        j -= 1;

    }

    return true;
}

let ans = [];
function helper(col_idx, board, n, temp) {
    if (col_idx === n) {
        ans.push([...temp]); //pusing a copy not the refrence
        return;
    }

    for (let row_idx = 0; row_idx < n; row_idx++) {
        if (check(row_idx, col_idx, n, board)) {
            temp.push(row_idx + 1);
            board[row_idx][col_idx] = 1;
            helper(col_idx + 1, board, n, temp);
            temp.pop();
            board[row_idx][col_idx] = 0;
        }
    }
}




let solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => new Array(n).fill(0));
    let temp = [];
    helper(0, board, n, temp);

    let ans_val = [];
    for (let i = 0; i < ans.length; i++) {
        let ans_val_temp = [];   // ✅ reset for each solution

        for (let j = 0; j < ans[i].length; j++) {
            let queenCol = ans[i][j] - 1;  // ✅ convert to 0-based index

            // ✅ works for ANY n, not just n=4
            let row = '.'.repeat(n);
            let rowArr = row.split('');
            rowArr[queenCol] = 'Q';
            ans_val_temp.push(rowArr.join(''));
        }

        ans_val.push(ans_val_temp);
    }

    console.log(ans);
    console.log(ans_val);
};

solveNQueens(4);
