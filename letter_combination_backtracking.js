function getMapping(num) {
    if (num === '1') return [];
    if (num === '2') return ['a', 'b', 'c'];
    if (num === '3') return ['d', 'e', 'f'];
    if (num === '4') return ['g', 'h', 'i'];
    if (num === '5') return ['j', 'k', 'l'];
    if (num === '6') return ['m', 'n', 'o'];
    if (num === '7') return ['p', 'q', 'r', 's'];
    if (num === '8') return ['t', 'u', 'v'];
    if (num === '9') return ['w', 'x', 'y', 'z'];
}



let res = [];
function backtrack(digits, index, current) {
    if (digits.length === 0) {
        return [];
    }
    if (index === digits.length) {
        res.push(current);
        return;
    }

    let letters = getMapping(digits[index]);
    for(let letter of letters){
        backtrack(digits,index+1,current+letter);
    }
}

backtrack("234",0,"");
console.log(res);