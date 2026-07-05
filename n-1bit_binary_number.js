let n = 3;
let op = "";
let one = 0;
let zero = 0;

//should be more 1 than zero

solve(one, zero, n, op);

function solve(one, zero, n, op) {
    if (n === 0) {
        console.log(op);
        return;
    }

    let op1 = op;
    op1 += "1";
    solve(one + 1, zero, n - 1, op1);
    if (one > zero) {
        let op2 = op;
        op2 += "0";
        solve(one, zero + 1, n - 1, op2);
    }
}

console.log(op);