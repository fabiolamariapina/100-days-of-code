// Creat a function that reverses a string
// String to be reversed:
// "Fabi loves Beyonce and Rihanna"

// psuedocode
// 1. make an array of the characters in the string (does it include the spaces?)
// 2. loop through the array (.forEach())
// 3. find some way to reverse this

function reverse(str) {
  // use string split(method) to create array
  const splitString = str.split(" ");
  // console.log(splitString);

  // reverse the new array
  splitString.reverse();
  console.log(splitString);

  // loop through newArray using .forEach
}
reverse("Fabi loves Beyonce and Rihanna");
