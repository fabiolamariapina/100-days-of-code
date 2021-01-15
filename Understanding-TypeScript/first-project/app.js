var person = {
    name: "Fabiola",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
// better to let typescrpt infer when it comes to objects
// rather than explicitly stating the type of values
person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
