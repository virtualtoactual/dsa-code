var singleNumber = function(nums) {

    // step 1 — XOR all numbers to get xor of two unique numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // step 2 — find any set bit in xor (use lowest set bit)
    // this bit differs between the two unique numbers
    let setBit = xor & (-xor);

    // step 3 — split into two groups and XOR each group
    let num1 = 0;
    let num2 = 0;

    for (let num of nums) {
        if (num & setBit) {
            num1 ^= num;  // group 1 — bit is set
        } else {
            num2 ^= num;  // group 2 — bit is not set
        }
    }

    return [num1, num2];
};

singleNumber([1, 2, 1, 3, 2, 5])  // [3, 5]
singleNumber([-1, 0])              // [-1, 0]
singleNumber([0, 1])               // [0, 1]