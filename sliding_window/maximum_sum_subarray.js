let arr = [2, 10, 5, 1, 3, 9];
let k = 3;


function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    let left = 0;
    let right = 0;
    while (right < arr.length) {

        //calcuation
        windowSum += arr[right];

        //window size is not equal to k
        if (right - left + 1 < k) {
            right++;
        }

        //window size is equal to k find the answer and slide the window
        else if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[left];
            //slide the window
            left++;
            right++;
        }
    }
    return maxSum;

}
console.log(maxSum(arr, k));


