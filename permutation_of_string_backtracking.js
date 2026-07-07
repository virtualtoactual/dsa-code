let str = "abc";
console.log(str.length);
let op = "";


function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
}

function stringPermutation(str) {
    let res = [];
    solve(str,0,res); //here 0 is start index
    return res;
}

function solve(str,start,res){
    if(start === str.length){ 
        res.push(str); 
    }

    //created set for similar chars
    let myset = new Set();
    //now for handling multiple choices
    for (let i = start;i<str.length;i++){
        if (!myset.has(str.charAt(i))) {
            myset.add(str.charAt(i));
            swap(str[start],str[i]);
            solve(str,start+1,res);
            swap(str[start],str[i]) //yhi step backtracking hai
        }

    }

}

//stringPermutation(str);
console.log(stringPermutation(str));