let str = "ab";


function solve(ip,op){
    if(ip.length ==0){
        console.log(op);
        return;
    }
    let op1 = op;
    let op2 = op;

    op2 += ip.charAt(0);
    ip = ip.slice(1);
    solve(ip,op1);
    solve(ip,op2);

}


solve(str,"");