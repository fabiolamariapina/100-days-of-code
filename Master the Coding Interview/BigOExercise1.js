// What is the Big O of the below
//function? (Hint, you may want to
//go line by line)
function funChallenge(input) {
  let a = 10; // first operation, assing value to a
  a = 50 + 3; // second operation, reassign a to
  // 50 + 3, which is 53

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // third operation I see here, steps depend on what the function is
    let stranger = true; // fourth operation from what I have
    a++; // fifth operation
  }
  return a; // sixth operation
}

// my guess = 6
