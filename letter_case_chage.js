let ip = "a1b2";
let op = "";
let res = [];

// ip  = ip.slice(1);
// console.log(ip);

// console.log(ip.length);

function isAlphabet(char) {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z');
}

solve(ip, op);

function solve(ip, op) {
    if (ip.length === 0) {
        res.push(op);
        return;
    }

    if (isAlphabet(ip.charAt(0))) {
        let op1 = op;
        let op2 = op;

        op1 += ip.charAt(0);
        op2 += ip.charAt(0).toUpperCase();

        ip = ip.slice(1);
        solve(ip, op1);
        solve(ip, op2);
    } else {
        let op1 = op;
        op1 += ip.charAt(0);

        ip = ip.slice(1);
        solve(ip, op1);
        return;
    }

}

console.log(res);