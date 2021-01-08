// example 1
const booooo = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
};

booooo([1, 2, 3, 4, 5]);

// time complexity= O(n)
// my first attempt at guessing space complexity= 4
// GOTCHA= space complexity does not include inputs
// real answer to space complexity = O(1)

// Example 2
const arrayOfHiNTimes = (n) => {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
};

arrayOfHiNTimes(6); // O(n)
