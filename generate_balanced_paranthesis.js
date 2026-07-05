let n = 3;
let res = [];
let op = "";
let open = n;
let close = n;



solve(open,close,op,res);

function solve(open, close, op, res) {
    if (open === 0 && close === 0) {
        res.push(op);
        return;
    }

    if (open != 0) {
        let op1 = op;
        op1 += "(";
        solve(open - 1, close, op1, res);
    }
    if(close > open){
        let op2 = op;
        op2 += ")";
        solve(open,close-1,op2,res);
    }
}

console.log(res);