import Queue from "../structures/Queue";

const setUp = () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  return queue;
};

test("Get first item", () => {
  const queue = setUp();
  const data = queue.peek();
  expect(data.value).toBe(1);
});

test("Remove first item", () => {
  const queue = setUp();
  const data = queue.dequeue();
  expect(data.value).toBe(2);
});
