let res = [];
let n = 2;


function solve(in_res, n) {
    // if (n == 1) {
    //     for (let i = 0; i <= 9; i++) {
    //         res.push(i);
    //     }
    //     return;
    // }

    if (n == 0) {
        let ans = 0;
        for (let i = 0; i < in_res.length; i++) {
            ans = ans * 10 + in_res[i];
        }
        res.push(ans);
        return;
    }

    for (let i = 1; i <= 9; i++) {
        if (in_res.length == 0 || i > in_res[in_res.length - 1]) {
            in_res.push(i);
            solve(in_res, n - 1);
            in_res.pop();
        }
    }


}

solve([], 3); 
console.log(res);