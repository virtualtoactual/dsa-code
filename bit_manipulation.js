//Check if nth bit is set

function isSet(num, n) {
    // let num = 5;
    // let n = 0;

    let leftShiftedN = 1 << n;

    let res = num & leftShiftedN;
    console.log(res);
    if (res !== 0) {
        console.log("bit is set");
    } else {
        console.log("bit is not set");
    }
    //one liner code for checking if nth bit is set
    //return (num & (1 << n)) !== 0;

}

isSet(5, 0)  // 0101 → bit 0 = 1 → true
isSet(5, 1)  // 0101 → bit 1 = 0 → false

// Set nth bit (turn it to 1)
function setBit(num, n) {
    //similary bit to set krne ke liye us poristio pr 1 lejakr use or condtion 
    //lga denge and now the bit is set
    return num | (1 << n);
}

setBit(5, 1)  // 0101 | 0010 = 0111 → 7

//Clear nth bit (turn it to 0)
function clearBit(num, n) {
    let leftShiftedN = 1 << n;
    let notLeftShiftedN = ~leftShiftedN;
    console.log(leftShiftedN);
    console.log(notLeftShiftedN);
    let res = num & notLeftShiftedN;
    console.log(res);
    
    //one liner code for clearing nth bit
    //return num & ~(1 << n);
}

clearBit(7, 1)  // 0111 & ~0010 = 0111 & 1101 = 0101 → 5

//Toggle nth bit (flip it)
function toggleBit(num, n) {
    return num ^ (1 << n);
}

toggleBit(5, 1)  // 0101 ^ 0010 = 0111 → 7
toggleBit(7, 1)  // 0111 ^ 0010 = 0101 → 5



//check if number is power of 2
function isPowerOf2(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Why it works:
// 8  → 1000
// 7  → 0111
// &  → 0000  ✓ power of 2

// 6  → 0110
// 5  → 0101
// &  → 0100  ✗ not power of 2

//clear lowest set bit
n & (n - 1)  // removes the rightmost 1 bit

// 12 → 1100
// 11 → 1011
// &  → 1000

// Use: count set bits efficiently


//Get lowest set bit
n & (-n)

// 12 → 1100
// -12 → 0100  (two's complement)
// &   → 0100  → isolates lowest set bit