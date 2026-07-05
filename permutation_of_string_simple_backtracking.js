let str = "abc";
console.log(str.length);

let res = [];
let op = "";


function permute(str, op) {
    if (str.length === 0) {
        res.push(op)
    }

    //yahan apne paas no of choices hai
    // for (let char of str) { //is loop se index nhi milta hai isiliye basic looop
    for (let i = 0; i < str.length; i++) {
        //console.log(str.charAt(i));
        //basically we are pulling out the char at that index and combining rest string
        let newIp = str.substring(0, i) + str.substring(i + 1) //check string_helper.js for clarification

        //ab extracted char ko output me add kr denge
        let newOp = op + str.charAt(i);

        //now wapas se permute run kr denge
        permute(newIp, newOp);
    }
}

let myset = new Set();
function permuteOptimised(str, op) {
    if (str.length === 0) {
        res.push(op)
    }

    //yahan apne paas no of choices hai
    // for (let char of str) { //is loop se index nhi milta hai isiliye basic looop
    for (let i = 0; i < str.length; i++) {

        //isme set me pehle check kr lenge ki is input ke liye already method run kiye hain ki nhi
        if (!myset.has(str.charAt(i))) {
            //nhi hai to insert kr denge and sara calculation krenge
            myset.add(str.charAt(i));
            //console.log(str.charAt(i));
            //basically we are pulling out the char at that index and combining rest string
            let newIp = str.substring(0, i) + str.substring(i + 1) //check string_helper.js for clarification

            //ab extracted char ko output me add kr denge
            let newOp = op + str.charAt(i);

            //now wapas se permute run kr denge
            permute(newIp, newOp);
        }
        //or age set me mil gya to kuchh krna hi nhi hai
    }

}

permuteOptimised(str, op);
console.log(res);