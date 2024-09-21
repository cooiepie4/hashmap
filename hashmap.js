class Hashmap {
  constructor(size = 16) {
    this.buckets = new Array(size).fill().map(() => []);
    this.size = size;
    this.count = 0;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  index(hashCode) {
    return hashCode % this.size;
  }
  set(key, value) {
    const hashCode = this.hash(key);
    const index = this.index(hashCode);
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket

    if (bucket[0] === key) {
      bucket[1] = value;
      return;
    }

    bucket.push([key, value]);
    this.count++;
    if (this.count > this.size * 0.75) {
      this.resize();
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const index = this.index(hashCode);
    const bucket = this.buckets[index];
    if (bucket[0] === key) {
      return bucket[1];
    }

    return;
  }

  has(key) {
    const hashCode = this.hash(key);
    const index = index(hashCode);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      } else {
        return false;
      }
    }
  }

  remove(key) {
    const hashCode = this.hash(key);
    const index = this.index(hashCode);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      } else {
        return false;
      }
    }
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = new Array(this.size).fill().map(() => []);
    this.count = 0;
  }

  key() {
    return this.buckets.flat().map(([nice]) => nice);
  }
  value() {
    return this.buckets.flat().map(([, value]) => value);
  }

  entries() {
    return this.buckets.flat();
  }

  resize() {
    const newSize = this.size * 2;
    const newBuckets = new Array(newSize).fill().map(() => []);

    this.buckets.flat().forEach(([key, value]) => {
      const hashCode = this.hash(key);
      const newIndex = hashCode % newSize;
      newBuckets[newIndex].push([key, value]);
    });

    this.buckets = newBuckets;
    this.size = newSize;
  }
}

const test = new Hashmap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
test.set("cuu", "cor");
test.set("moo", "silve");
test.set("mo", "slve");
test.set("m", "si");
console.log(test.entries());
console.log(test.key());
