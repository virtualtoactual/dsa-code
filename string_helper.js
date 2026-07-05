let str = "hello";

//suppose we have to take out e (2)
console.log(str.substring(0,1));
console.log(str.substring(2));

let initialStr = str.substring(0,1);
let lastStr = str.substring(2);

//combine these to get string without e
let finalStr = initialStr + lastStr;
console.log(finalStr);