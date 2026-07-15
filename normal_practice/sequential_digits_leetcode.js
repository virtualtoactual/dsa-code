function checkSequenceDigit(num) {
    let numToString = num.toString();
    for (let i = 0, j = 1; j < numToString.length; i++, j++) {
        let curr_digit = parseInt(numToString[i]);
        let next_digit = parseInt(numToString[j]);
        if ((next_digit - curr_digit) !== 1) return false;
    }
    return true;
}

//let res = checkSequenceDigit(345);

let res = [];
function findSequentialDigit(low, high) {
    while (low < high) {
        //console.log(low);
        if(checkSequenceDigit(low)){
            res.push(low);
        }
        low++;
    }
}

findSequentialDigit(10,10000);
console.log(res);


//optimised
function findSequentialDigitOptimised(low, high) {
    const result = [];
    const digits = '123456789';  // all digits in sequence

    // generate all sequential numbers of each length
    for (let len = 2; len <= 9; len++) {
        for (let start = 0; start + len <= 9; start++) {
            // slice a window of size `len` from digits string
            let num = parseInt(digits.slice(start, start + len));
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
}

findSequentialDigit(10,1000000000);
console.log(res);