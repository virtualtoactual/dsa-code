function getResBinary(num1, num2, num3 = "0") {
    let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);

    // sum can be 0, 1, 2, or 3
    if (sum === 0) return { temp_res: "0", carry: "0" };
    if (sum === 1) return { temp_res: "1", carry: "0" };
    if (sum === 2) return { temp_res: "0", carry: "1" };
    if (sum === 3) return { temp_res: "1", carry: "1" };
}


function addBinary(a, b) {
    let output_res = "";
    let carry = "0";

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry === "1") {
        let num1 = i >= 0 ? a[i] : "0";
        let num2 = j >= 0 ? b[j] : "0";

        let method_response = getResBinary(num1, num2, carry);
        output_res = method_response.temp_res + output_res;
        carry = method_response.carry;

        i--;
        j--;
    }
    return output_res;
}



let res = addBinary("1010", "1011");
console.log(res);
