let str = "5477";
let k = 4;       // fix 1: missing let
let res = "0";   // fix 2: string not array, since you're doing res = str

// fix 3: swap takes array + indices
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function solve(arr, k, start) {
    if (k === 0 || start === arr.length - 1) {
        return;
    }

    for (let i = start + 1; i < arr.length; i++) {
        let mxmElement = 0;
        for (let j = i; j < arr.length; j++) {
            let num = parseInt(arr[j]);
            mxmElement = num > mxmElement ? num : mxmElement;
        }

        // fix 4: === mxmElement not > mxmElement
        if (parseInt(arr[start]) < parseInt(arr[i]) && parseInt(arr[i]) === mxmElement) {
            swap(arr, start, i);                    // fix 3

            if (parseInt(arr.join("")) > parseInt(res)) {  // fix 5: arr.join() not str
                res = arr.join("");
            }

            solve(arr, k - 1, start + 1);           // fix 6: removed res param (res is global)
            swap(arr, start, i);
        }
    }
}

let arr = str.split("");   // fix 7: mutable array
solve(arr, k, 0);
console.log(res);  // "7754"