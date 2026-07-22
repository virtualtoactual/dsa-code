function fib(n, dp) {
    if (n <= 1) {
        return n;
    }
    //dp part isko comment out krke time check kro kitna difference aata hai
    if(dp[n] != -1) return dp[n];

    dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    return dp[n];
}









const n = 40;
const dp = new Array(n + 1).fill(-1);
console.time('fib');
const sol = fib(n, dp);
console.log(sol);
console.timeEnd('fib');
// → fib: 0.123ms