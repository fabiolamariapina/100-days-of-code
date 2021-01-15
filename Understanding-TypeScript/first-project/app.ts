const person = {
  name: "Fabiola",
  age: 22,
  hobbies: ["Sports", "Cooking"],
};

// better to let typescrpt infer when it comes to objects
// rather than explicitly stating the type of values
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
