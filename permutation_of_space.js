let ip = "ABC";
let op = "";

op += ip.charAt(0);
ip = ip.slice(1);

console.log(ip.length);

solve(ip,op);

function solve(ip,op){
    if(ip.length === 0){
        console.log(op);
        return;
    }
    let op1 = op;
    let op2 = op;

    op1 += "_";
    op1 += ip.charAt(0);
    op2 += ip.charAt(0);

    //making input smaller
    ip = ip.slice(1);

    solve(ip,op1);
    solve(ip,op2);
}