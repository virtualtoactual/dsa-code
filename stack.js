class Stack {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }

    peek() {
        // see top item without removing it
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }
}

module.exports = Stack;