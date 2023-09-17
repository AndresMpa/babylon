import Node from "./Node";

class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor(value: any) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }

  private getIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  append(value: any) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return newNode;
  }
  prepend(value: any) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return newNode;
  }
  insert(index: number, value: any) {
    if (index >= this.length) {
      console.warn(
        `${index} exceeded list length (${this.length}); appding your value at the end`
      );
      return this.append(value);
    }

    const newNode = new Node(value);
    const previousPointer = this.getIndex(index);
    const holdingPointer = previousPointer.next;
    previousPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return newNode;
  }
  delete(index: number) {
    if (index >= this.length) {
      throw new Error(`${index} exceeded list length (${this.length})`);
    }
    const previousPointer = this.getIndex(index);
    const deletedNode = previousPointer.next;
    const nextNode = deletedNode.next;
    previousPointer.next = nextNode;

    return deletedNode;
  }
  search(index: number) {
    if (index >= this.length - 1) {
      throw new Error(`${index} exceeded search threshold`);
    }

    const previousPointer = this.getIndex(index);
    const foundPointer = previousPointer.next;
    const LastPointer = foundPointer.next;

    return [previousPointer, foundPointer, LastPointer];
  }
  values() {
    let currentPointer = this.head;
    const values = [];
    while (currentPointer !== null) {
      values.push(currentPointer.value);
      currentPointer = currentPointer.next;
    }
    return values;
  }
}

export default SinglyLinkedList;
