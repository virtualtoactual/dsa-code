let arr = [2, 10, 5, 1, 3, 9];
let k = 3;


function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    let left = 0;
    let right = 0;
    while (right < arr.length) {
        windowSum += arr[right];
        if (right - left + 1 < k) {
            right++;
        }
        else if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[left];
            left++;
            right++;
        }
    }
    return maxSum;

}
console.log(maxSum(arr, k));


