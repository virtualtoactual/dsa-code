/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let product = 1;
    let maxProduct = -1;
    let arrNum = n.toString().split('').map(Number)
    for(let i = 0;i<arrNum.length;i++){
        for(let j = i+1;j<arrNum.length;j++){
            product = arrNum[i] * arrNum[j];
            if(product > maxProduct){
                maxProduct = product;
            }
        }

    }
    return maxProduct;
};

console.log(maxProduct(453));