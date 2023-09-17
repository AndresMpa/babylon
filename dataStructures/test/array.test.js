import { arrayInstance } from "../structures/ArrayFromScratch";

const testSetUp = () => {
  arrayInstance.push("Hello");
  arrayInstance.push("World");
  arrayInstance.push("This");
  arrayInstance.push("Is");
  arrayInstance.push("A");
  arrayInstance.push("Test");
};

test("Add a word to array instance", () => {
  testSetUp();
  expect(arrayInstance.get(0)).toBe("Hello");
});

test("Pop an item from array instance", () => {
  testSetUp();
  expect(arrayInstance.pop(0)).toBe("Test");
});

test("Delete an item from array instance", () => {
  testSetUp();
  expect(arrayInstance.delete(2)).toBe("This");
});
