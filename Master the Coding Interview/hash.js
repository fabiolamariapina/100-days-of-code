let user = {
  age: 54,
  name: "Bobina",
  magic: true,
  scream: function () {
    console.log("ahhhhhhh!");
  },
};

// LOOKUP
console.log(user.age); // output-54, O(1)
user.spell = "eat bologna"; //O(1)
// console.log(user);
console.log(user.scream()); //O(1)

// ONE OF THE MAIN PROBLEMS WITH HASH TABLES
// There in nothing telling the hash function
// to evenly distribute until everything is full
// Hash collision- no gurantee that each key-value pair
// will have it's own space, inevitable because
// memory is limited, slows down ability to access/
// information
// SOLUTIONS TO HASH COLLISIONS
// 1. Linked Lists -> later lesson
