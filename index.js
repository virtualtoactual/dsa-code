var searchRange = function(nums, target) {
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            res.push(i);
        }
    }
    if(res.length <=1){
        return [-1,-1]
    }
    return res;
};

let nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums,target));