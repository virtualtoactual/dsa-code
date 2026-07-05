const Stack = require('./stack');

const stack = new Stack();

stack.push(5);
stack.push(1);
stack.push(0);
stack.push(2);

console.log(stack);


function sortStack(stack) {
    if (stack.isEmpty()) {
        return;
    }
    let popped = stack.pop();
    sortStack(stack);
    insert(stack, popped);
}

function insert(stack, num) {
    if (stack.isEmpty() || stack.peek() < num) {
        stack.push(num);
        return;
    }
    let popped = stack.pop();
    insert(stack, num);
    stack.push(popped);
}

sortStack(stack);
console.log("sorted stack", stack);