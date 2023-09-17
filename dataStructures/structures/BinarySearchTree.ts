class TreeNode {
  left: number;
  right: number;
  value: any;
  constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }
  insert(value: any) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return newNode;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return newNode;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value: any, findNode: boolean = false): boolean {
    let currentNode = this.root;
    if (null === currentNode.value) {
      return false;
    } else if (value === currentNode.value) {
      return findNode ? currentNode : true;
    }
    while (true) {
      if (currentNode === null) {
        return false;
      } else {
        if (value < currentNode.value) {
          if (null === currentNode.value) {
            return false;
          } else if (value === currentNode.value) {
            return findNode ? currentNode : true;
          }
          currentNode = currentNode.left;
        } else {
          if (null === currentNode.value) {
            return false;
          } else if (value === currentNode.value) {
            return findNode ? currentNode : true;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}
export const tree = new BinarySearchTree();
