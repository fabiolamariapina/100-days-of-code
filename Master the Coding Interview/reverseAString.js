// Creat a function that reverses a string
// String to be reversed:
// "Fabi loves Beyonce and Rihanna"

// psuedocode
// 1. make an array of the characters in the string (does it include the spaces?)
// 2. loop through the array (.forEach())
// 3. find some way to reverse this

// function reverse(str) {
//   // use string split(method) to create array
//   const splitString = str.split(" ");
//   // console.log(splitString);

//   // reverse the new array
//   splitString.reverse();
//   // confirm that it reversed sentence
//   // console.log(splitString);

//   // loop through splitString array
//   for (let i = 0; i < splitString.length; i++) {
//     console.log(splitString[i]);
//     // for each word in the array, reverse it
//   }
// }
// reverse("Fabi loves Beyonce and Rihanna");

const reverse2 = (str) => {
  // using built in array methods will not make it necessary to have to check if input is a string
  // normal string
  // return str.split("").reverse("").join("");
  // array with characters ala leetcode 
  // return str.reverse() 
};
console.log(reverse2(["h", "e", "l", "l", "o"]))