
function subSetSum(arr, sum) {
    let n = arr.length;
    let t = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(0));
    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (i == 0) {
                t[i][j] = false;
            }
            if (j == 0) {
                t[i][j] = true;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
            } else {
                t[i][j] = t[i - 1][j];
            }
        }
    }
    return t[n][sum];
}


var canPartition = function (nums) {
    let sum = 0;
    for (let el of nums) {
        sum += el;
    }
    if (sum % 2 !== 0) {
        return false;
    } else {
        return subSetSum(nums, sum / 2);
    }

};

let arr = [1, 5, 11, 5];
console.log(canPartition(arr));