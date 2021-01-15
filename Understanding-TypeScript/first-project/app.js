var person = {
    name: "Fabiola",
    age: 22,
    hobbies: ["Sports", "Cooking"]
};
// better to let typescrpt infer when it comes to objects
// rather than explicitly stating the type of values
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
