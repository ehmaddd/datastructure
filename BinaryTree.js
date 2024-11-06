class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function height(node) {
    if (node === null) {
        return -1;
    } else {
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Example usage:
// Constructing a binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);
root.left.left.left.right = new TreeNode(8);

console.log("Height of the binary tree:", height(root));  // Output: 2