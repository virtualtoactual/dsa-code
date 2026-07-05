let arr = [5,0,1,2];

function sortArr(arr){
    if(arr.length === 0){
        return;
    }
    let num = arr.pop();
    sortArr(arr);
    insert(arr, num);
}

function insert(arr, num){
    if(arr.length === 0 || arr[arr.length - 1] < num){
        arr.push(num);
        return;
    }
    let popped = arr.pop();
    insert(arr, num);
    arr.push(popped);
}


sortArr(arr);
console.log(arr);