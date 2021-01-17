// Type Aliases- often usided to combine two union types
// type name is something not reserved in TS/JS
// can be any data type
// benefit: makes code drieer, simpler, and cleaner, make intentions clear
// Example #1
type Combineable = number | String; // used where we had these two union types originally
// Example #2
type conversionDescriptor = "as-number" | "as-text"; // used where we had these two union types originally

function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: conversionDescriptor
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
