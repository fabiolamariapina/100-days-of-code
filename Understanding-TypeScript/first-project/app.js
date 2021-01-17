// Functions
// start using ES6 syntax
// let TypeScript infer the type of return
// Function Return Type Void
// just means function does not have a return statement
// it does not return anything
// undefines can be used if there is a return statement
// with no value
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result: " + num);
};
printResult(add(5, 12));
// Function Types and Callbacks
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// Functions as Types
// Function types allow us to describe which type of
// function specifically we want to use somewhere
// in this example, it is made clear that
// combineValues is a function type
// A function type is created with ES6 arrow notation
// after the arrow, specify the retuen type of the function
// you want to add
// here, we are telling typescipt that combineValues
// should accept a function that takes two parameters,
// where each parameter is a number, and where the
// function overall then returns a number
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
