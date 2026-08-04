
function knapsack(wt, val, w, n) {
    if (n == 0 || w == 0) {
        return 0;
    }

    if (wt[n - 1] <= w) {
        return Math.max((val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1)), knapsack(wt, val, w, n - 1));
    } else if (wt[n - 1] > w) {
        return knapsack(wt, val, w, n - 1);
    }
}





let wt_arr = [1, 3, 4, 5];
let val_arr = [1, 4, 5, 7];

let W = 7;

let profit = knapsack(wt_arr,val_arr,W,4);
console.log(profit);