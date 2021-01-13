const strings = ["a", "b", "c", "d"];

// Assumptions
// storing 4 items in a 32 bit system
// 4 items * 4 shelves in memory - 16 bytes of storage

// Array Methods
//.push() = add something to the end of the array
// strings.push("e"); // O(1) operation

// .pop() = remove the last item from the array
// strings.pop(); // O(1) operation

// .unshift() = add an item to the beginning of the array
// strings.unshift("x"); //O(n) operation because it is
// dependent on the size of the array

// .splice(index you want to start at, how many things from that index on do we want to delete- 0 if we only want to add something, what we want to add) = add an item to the middle of the array
strings.splice(2, 0, "alien"); // O(n) operation

console.log(strings);

// Think of it this way
// O(1) operations for adding/deleting items from the end of an array
// O(n) operationf if wee add eleswhere since we need to do the initial operation
// then shift the indexes (is that correct??) of the items in the array
