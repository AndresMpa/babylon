class ArrayFromScratch {
  length: number;
  data: Object;
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index: number) {
    return this.data[index];
  }
  push(item: any) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }
  delete(index: number) {
    const deletedItem = this.data[index];
    this.shiftIndex(index);

    return deletedItem;
  }
  shiftIndex(index: number) {
    let item = index;
    for (item; item < this.length - 1; item++) {
      this.data[item] = this.data[item + 1];
    }

    delete this.data[this.length - 1];

    this.length--;
  }
}

export const arrayInstance = new ArrayFromScratch();
