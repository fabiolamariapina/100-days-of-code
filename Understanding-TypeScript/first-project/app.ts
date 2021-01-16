// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuples- explicity states what types and how many values that array has
// } = {
//   name: "Fabiola",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// better to let typescrpt infer when it comes to objects
// rather than explicitly stating the type of values

// person.role.push("admin");
// person.role[1] = 10;
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Fabiola",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
