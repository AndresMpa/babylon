import Stack from "../structures/Stack";

const setUp = () => {
  const stack = new Stack();

  stack.push(5);
  stack.push(4);
  stack.push(3);
  stack.push(2);
  stack.push(1);

  return stack;
};

test("Peek item from stack", () => {
  const stack = setUp();
  const data = stack.peek()
  expect(data.value).toBe(1);
});
test("Pop top item from stack", () => {
  const stack = setUp();
  stack.pop()
  stack.pop()
  const data = stack.pop()
  expect(data.value).toBe(4);
});
test("Get stack as list", () => {
  const stack = setUp();
  const data = stack.get()
  expect(data).toStrictEqual([1, 2, 3, 4, 5]);
});
