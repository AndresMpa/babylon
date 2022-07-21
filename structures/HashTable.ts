class HashTable {
  data: Array<any>;
  constructor(size: number) {
    this.data = new Array(size);
  }
  hashMethod(key: string) {
    let hash = 0;
    let item = 0;
    for (item; item < key.length; item++) {
      hash = (hash + key.charCodeAt(item) * item) % this.data.length;
    }
    return hash;
  }
  set(key: string, value: any) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key: string): any {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      let item = 0;
      for (item; item < currentBucket.length; item++) {
        if (currentBucket[item][0] === key) {
          return currentBucket[item][1];
        }
      }
    }
    return undefined;
  }
  getHashes(): Array<number> {
    const avalibleHashes = [];
    let index = 0;
    for (index; index < this.data.length; index++) {
      if (this.data[index]) {
        avalibleHashes.push(index);
      }
    }
    return avalibleHashes;
  }
  deleteByKey(key?: string) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      let item = 0;
      for (item; item < currentBucket.length; item++) {
        if (currentBucket[item][0] === key) {
          let removed = currentBucket[item]
          currentBucket[item] = [];
          return removed
        }
      }
    }
  }
  deleteByHash(hash?: string): any {
    const removed = this.data[hash];
    delete this.data[hash];
    return removed ? removed : false;
  }
}

export default HashTable;
