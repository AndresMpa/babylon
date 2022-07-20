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
}

export const arrayInstance = new ArrayFromScratch();

