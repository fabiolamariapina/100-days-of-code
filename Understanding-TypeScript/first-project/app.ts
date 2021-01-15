const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuples- explicity states what types and how many values that array has
} = {
  name: "Fabiola",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// better to let typescrpt infer when it comes to objects
// rather than explicitly stating the type of values
// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
