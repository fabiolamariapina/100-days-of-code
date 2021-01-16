function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  // explicitly say that this is where number type goes
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  }
  // explicitly say that this is where string type goes
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Spongebob", "Patrick", "as-text");
console.log(combinedNames);
