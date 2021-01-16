function combine(input1: number | string, input2: number | string) {
  let result;
  // explicitly say that this is where number type goes
  if (typeof input1 === "number" && typeof input2 == "number") {
    result = input1 + input2;
  }
  // explicitly say that this is where string type goes
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Spongebob", "Patrick");
console.log(combinedNames);
