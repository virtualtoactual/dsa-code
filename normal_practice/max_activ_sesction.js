var maxActiveSectionsAfterTrade = function(s) {
    s = '1' + s + '1';
    let arr = s.split("");   // fix 1: array needed to mutate
    let n = arr.length;

    // build blocks first, then slide i,j,k over them
    let blockChars = [];
    let blockSizes = [];
    let p = 0;
    while (p < n) {
        let q = p;
        while (q < n && arr[q] === arr[p]) q++;
        blockChars.push(arr[p]);
        blockSizes.push(q - p);
        p = q;
    }

    // fix 2: i,j,k slide over blocks not chars
    // fix 3: correct condition — middle is '1', left and right are '0'
    let maxGain = 0;
    let i = 0, j = 1, k = 2;
    while (k < blockChars.length) {
        if (blockChars[j] === '1' && blockChars[i] === '0' && blockChars[k] === '0') {
            let gain = blockSizes[i] + blockSizes[k];
            if (gain > maxGain) maxGain = gain;
        }
        i++;
        j++;
        k++;
    }

    // fix 4: count ALL 1s not just leading 1s (skip boundary indices 0 and n-1)
    let counter = 0;
    let m = 1;
    while (m < n - 1) {
        if (arr[m] === '1') counter++;
        m++;
    }

    return counter + maxGain;
};

console.log(maxActiveSectionsAfterTrade("0100"));    // 4
console.log(maxActiveSectionsAfterTrade("0011100")); // 7
console.log(maxActiveSectionsAfterTrade("111"));     // 3