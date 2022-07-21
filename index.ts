import Stack from "./structures/Stack";

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.peek());
stack.pop();
console.log(stack.peek());

console.log(stack.get())


