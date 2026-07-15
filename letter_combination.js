function getMapping(num){
    if(num === '1') return [];
    if(num === '2') return ['a','b','c'];
    if(num === '3') return ['d','e','f'];
    if(num === '4') return ['g','h','i'];
    if(num === '5') return ['j','k','l'];
    if(num === '6') return ['m','n','o'];
    if(num === '7') return ['p','q','r','s'];
    if(num === '8') return ['t','u','v'];
    if(num === '9') return ['w','x','y','z'];
}


function getLetterCombination(digits){

    let res = [];
    let digitsArr = digits.split("");
    let val1 = getMapping(digitsArr[0]);
    let val2 = getMapping(digitsArr[1]);

    for(let i = 0;i<val1.length;i++){
        for(let j=0;j<val2.length;j++){
            let op = val1[i]+val2[j];
            res.push(op);
        }
    }
    return res;
}

let val_res = getLetterCombination("23");
console.log(val_res);

