var search = function (nums, target) {
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        let mid = (lo + hi) >> 1;
        if (nums[mid] === target) return mid;

        //here two condition will be there either target is in first half or target in second half
        //if target is smaller then search in first half
        //if targe is larger search in second half

        if (target < nums[mid]) {
            hi = mid - 1;
        }
        if (target > nums[mid]) {
            lo = mid + 1;
        }

    }
    return -1;
};

var searchRecursive = function (nums, target, lo, hi) {
    if (lo > hi) return -1;  // ← base case
    let mid = (lo + hi) >> 1;
    
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
        return searchRecursive(nums, target, lo, mid - 1);
    }
    if (target > nums[mid]) {
        return searchRecursive(nums, target, mid + 1, hi);
    }


    return -1;
};

let nums = [3, 5, 7, 9, 11, 14, 32, 56, 89, 98], target = 56;
console.log(search(nums, target));
console.log("recursive search", searchRecursive(nums, target, 0, (nums.length - 1)));