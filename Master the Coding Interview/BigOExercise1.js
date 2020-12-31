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

// Solution
function funChallenge(input) {
  let a = 10; // O(1) --> runs once, defined and consistent
  a = 50 + 3; // O(1) --> runs once, defined and consistent

  for (let i = 0; i < input.length; i++) {
    //O(n) -> dependent on input
    anotherFunction(); // O(n) -> dependnet on input
    let stranger = true; // O(n) -> dependent on input
    a++; // O(n) -> dependent on input
  }
  return a; // O(1) --> runs once, defined and consistent
}

// 3 steps that we know of
// 3 + n + n + n + n
// solution/official answer: BIG O(3 + 4n)
