import SinglyLinkedList from "../structures/SinglyLinkedList";
import Node from "../structures/SinglyLinkedList";

const setUp = () => {
  const firstNode = new Node(81);

  const linkedList = new SinglyLinkedList(firstNode);

  linkedList.append(new Node(82));
  linkedList.append(new Node(83));
  linkedList.append(new Node(84));
  linkedList.append(new Node(85));
  linkedList.append(new Node(86));
  linkedList.append(new Node(87));
  linkedList.append(new Node(88));
  linkedList.append(new Node(89));

  return linkedList;
};

test("Append data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.append(new Node(90));
  expect(data.value.head.value).toBe(90);
});
test("Prepend data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.prepend(new Node(90));
  expect(data.value.head.value).toBe(90);
});
test("Insert data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.insert(4, new Node(90));
  expect(data.value.head.value).toBe(90);
});
test("Delete a fourth element from linked list", () => {
  const linkedList = setUp();
  const data = linkedList.delete(4);
  expect(data.value.head.value).toBe(86);
});
test("Get data around a node", () => {
  const linkedList = setUp();
  const data = linkedList.search(6).map((item) => item.value.head.value);
  expect(data).toStrictEqual([87, 88, 89]);
});
test("Get all values", () => {
  const linkedList = setUp();
  const data = linkedList.values().map((item) => item.head.value);
  expect(data).toStrictEqual([81, 82, 83, 84, 85, 86, 87, 88, 89]);
});
