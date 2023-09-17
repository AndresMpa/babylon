import HashTable from "../structures/HashTable";

const setUp = () => {
  const hashTable = new HashTable(50);

  hashTable.set("AndresMpa", 20);
  hashTable.set("JennDev", 21);
  hashTable.set("DK8", 14);
  hashTable.set("Mappa", 22);
  hashTable.set("KuffSnack", 10);
  hashTable.set("Riukendo", 40);
  hashTable.set("Sun", 23);

  return hashTable;
};

test("Get data from a register on table", () => {
  const hashTable = setUp();
  expect(hashTable.get("AndresMpa")).toBe(20);
});

test("Set a new register on table", () => {
  const hashTable = setUp();
  const data = hashTable.getHashes();
  expect(data).toEqual([3, 36, 37, 40, 41, 45]);
});

test("Delete register from table using hash key", () => {
  const hashTable = setUp();
  const data = hashTable.deleteByHash(3);
  const sample = [["AndresMpa", 20]];
  expect(data).toEqual(sample);
});

test("Delete register from table using address", () => {
  const hashTable = setUp();
  const data = hashTable.deleteByKey("Sun");
  const sample = ["Sun", 23];
  expect(data).toEqual(sample);
});
