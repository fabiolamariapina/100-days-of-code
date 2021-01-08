// Find 1st, Find Nth
const array = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2014,
  },
  {
    tweet: "teddy",
    date: 2018,
  },
];
// since where comparing one object in the array
// to the others, it is a nested loop = O(n^2)

// interview question: Big O of .length to a string
// answer= depends on the language, in JS, it's a property
// an object => O(n)
