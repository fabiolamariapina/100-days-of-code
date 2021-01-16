// limit - two arrays

// PSUEDOCODE
// 1. layout function skeleton - did that
// 2. if statement so it checks if its an array (array.isArray) that at least two arrays are required - did that
// 3. else, find way to combine two arrays without sorting the values in
// order -> .concat() method (ex: ogArray.concat(arrayToCombine itWith))
// 4. sort the values in new array from least to greatest

// MY SOLUTION
const mergeSortedArray = (array1, array2) => {
  // check that inputs are actually arrays
  // TYPEOF
  if (Array.isArray(array1) !== true || Array.isArray(array2) !== true) {
    console.log("Please give me two arrays");
  } else {
    let combinedArray = array1.concat(array2);
    // check that .concat() array method worked
    // console.log(combinedArray); // it worked
    // sort the values in combinedArray from least to greatest
    let sortedArray = combinedArray.sort(function (a, b) {
      return a - b;
    });
    console.log(sortedArray);
  }
};
// test condition for two arrays
mergeSortedArray([0, 3, 4, 31], [4, 6, 30]); // [0, 3, 4, 4, 6, 30, 31] -> it worked
mergeSortedArray([1, 55, 74], [15, 35, 7]); /// it worked
mergeSortedArray([5, 4, 3], [2, 1]); // it worked
// test conditions if at least one input is not an array
// mergeSortedArray("bananas", [1, 1]); // worked
// test condition of both inputs are not array
// mergeSortedArray("elephant", false); // worked
