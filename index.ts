import HashTable from "./structures/HashTable";

const hashTable: HashTable = new HashTable(50);

hashTable.set("AndresMpa", 20);
hashTable.set("JennDev", 21);
hashTable.set("DK8", 14);
hashTable.set("Mappa", 22);
hashTable.set("KuffSnack", 10);
hashTable.set("Riukendo", 40);
hashTable.set("Sun", 23);

console.log(hashTable.get("AndresMpa"));

console.log(hashTable.deleteByKey("AndresMpa"));

console.log(hashTable.get("AndresMpa"));
