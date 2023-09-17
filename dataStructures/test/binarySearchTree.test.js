import { tree } from "../structures/BinarySearchTree";

const setUp = () => {
  tree.insert(10);
  tree.insert(4);
  tree.insert(20);

  return tree;
};

test("Get valus from tree", () => {
  const tree = setUp();
  const data = [tree.root.value, tree.root.left.value, tree.root.right.value];
  expect(data).toStrictEqual([10, 4, 20]);
});
test("Find existing values on tree leafs", () => {
  const tree = setUp();
  let data = tree.search(10);
  expect(data).toBe(true);

  data = tree.search(4, true);
  expect(data.value).toBe(4);

  data = tree.search(20, true);
  expect(data.value).toBe(20);
});
test("Find unexisting values on leafs", () => {
  const tree = setUp();
  const data = tree.search(8);
  expect(data).toStrictEqual(false);
});
