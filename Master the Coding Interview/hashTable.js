class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // set has variable equal to zero
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // 1. loop through key input character by character
      // 2. generate some sort of a hash
      // more on .charCodeAt() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      console.log(hash);
    }
    return hash;
  }
  // create set method
  set(key, value) {
    // receive a key and a value
    // all we are saying is store this data
    // that we insert as a key-value pair in the adress space
    // create by _hash(key) function
    let address = this._hash(key);
    // if there is nothing there, save space since we have only 50 spaces
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // create get method
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

// instantiate a new instance of HashTable class
// this new hashtable will create a new array
// with space for 50 items
const myHashTable = new HashTable(50);
// console.log(myHashTable); // output: HashTable { data: [ <50 empty items> ] }
// call _hash function to myHashTable with key parameter
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");

// Hash Tables vs Arrays
// Arrays:
// search- O(n)
// lookup- O(1)
// push- O(1)
// insert- O(n)
// delete- O(n)
// Hash Tabled
// all the operations above are O(1)
