"use strict";
// THE "UNKNOWN" TYPE
// here, it's unkown because we
// do not know yet waht the user will
// eventually answer
// unlike any, unknown allows for type checking
var userInput;
var userName;
userInput = 5;
userInput = "Spongebob";
// extra typecheck to be able to assign
// an unknown type to a string or any fixed type
if (typeof userInput === "string") {
    userName = userInput;
}
// THE "NEVER" TYPE
// never returns anything
// esentially crash/break your script
var generateError = function (message, code) {
    throw { message: message, erroeCode: code };
};
var result = generateError("An error ocurred!", 500);
console.log(result);
