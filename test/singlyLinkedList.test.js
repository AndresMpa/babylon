import SinglyLinkedList from "../structures/SinglyLinkedList";

const setUp = () => {
  const firstNode = 81;

  const linkedList = new SinglyLinkedList(firstNode);

  linkedList.append(82);
  linkedList.append(83);
  linkedList.append(84);
  linkedList.append(85);
  linkedList.append(86);
  linkedList.append(87);
  linkedList.append(88);
  linkedList.append(89);

  return linkedList;
};

test("Append data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.append(90);
  expect(data.value).toBe(90);
});
test("Prepend data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.prepend(90);
  expect(data.value).toBe(90);
});
test("Insert data to linked list", () => {
  const linkedList = setUp();
  const data = linkedList.insert(4, 90);
  expect(data.value).toBe(90);
});
test("Delete a fourth element from linked list", () => {
  const linkedList = setUp();
  const data = linkedList.delete(4);
  expect(data.value).toBe(86);
});
test("Get data around a node", () => {
  const linkedList = setUp();
  const data = linkedList.search(6).map((item) => item.value);
  expect(data).toStrictEqual([87, 88, 89]);
});
test("Get all values", () => {
  const linkedList = setUp();
  const data = linkedList.values().map((item) => item);
  expect(data).toStrictEqual([81, 82, 83, 84, 85, 86, 87, 88, 89]);
});
