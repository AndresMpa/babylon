class Node {
  next: any;
  value: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

// Last In First Out
class Stack {
  top: any;
  bottom: any;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value: any) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return newNode;
  }
  pop() {
    const newTop = this.top.next;
    this.top = newTop;
    return newTop;
  }
  get() {
    let currentNode = this.top;
    const list = [];
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;
