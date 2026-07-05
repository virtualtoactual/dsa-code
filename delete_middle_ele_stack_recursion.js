const Stack = require('./stack');

const stack = new Stack();

stack.push(5);
stack.push(1);
stack.push(0);
stack.push(2);

console.log(stack);


function solve(stack, k) {
    if (k == 1) {
        stack.pop();
        return;
    }
    let popped = stack.pop();
    solve(stack, k-1);
    stack.push(popped);
}

function deleteMiddleElement(stack, k) {
    if (stack.isEmpty()) {
        return stack;
    }
    k = (stack.size() / 2) + 1;
    solve(stack, k);
}

deleteMiddleElement(stack, 3);
console.log("deleted Middle element", stack);