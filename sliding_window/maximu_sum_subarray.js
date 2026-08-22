let arr = [2,1,5,1,3,9];
let k = 3;


function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    for(let right = k;right<arr.length;right++){
        windowSum += arr[right] - arr[right - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
    
}
console.log(maxSum(arr, k));


