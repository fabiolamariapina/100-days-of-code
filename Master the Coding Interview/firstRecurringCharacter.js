//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// naive approach
// const firstRecurringCharacter = (input) => {
//   // nested loops
//   // O(n^2)
//   // find any repitition
//   for (let i = 0; i < input.length; i++) {
//     // always to to the index after i
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// };
// let firstTestCase = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// console.log(firstTestCase);

// best approach- hash table (where one could uses a nested loop (mostly to check for matching
// values in an array, use a hash table))
// loop through array, as it loops, create a hash table, where as everything is added
// each value in the input is compared to see if it already exists
const firstRecurringCharacter = (input) => {
  // create map so that there is no duplicate keys
  let map = {};
  // loop through input
  for (let i = 0; i < input.length; i++) {
    // first conditional- if the key already exists,
    //  return input[i]
    if (map[input[i]] !== undefined) {
      return input[i];
    } // if it does not exist, add it to map
    else {
      map[input[i]] = i;
    }
  }
  return undefined;
};
let firstTestCase = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(firstTestCase);
