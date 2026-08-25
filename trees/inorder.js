class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//         1
//        / \
//       2   3
//      / \ / \
//     4  5 6  7


//inorder traversal recursive
function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}

//inorder traversal iterative
function inorderIterative(root) {
    const stack = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        // reach leftmost node
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();           // backtrack
        console.log(curr.value);      // visit
        curr = curr.right;            // go right
    }
}

inorder(root);