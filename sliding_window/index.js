let arr = [4, 1, 1, 1, 2, 3, 5];
let k = 5;

//find the subarray with the maximum sum of length k
function maxSum(arr, k) {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    let windowSum = 0;
    while(j < arr.length){
        windowSum += arr[j];
        if(windowSum<k){
            j++;
        }
        else if(windowSum === k){ 
            maxLength = Math.max((j-i+1), maxLength);
            j++;
        }
        else if(windowSum > k){
            windowSum -= arr[i];
            i++;
            j++;
        }
    }
    return maxLength;
}

console.log(maxSum(arr, k));