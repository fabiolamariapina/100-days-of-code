// create my own Nemo Array
const Nemo = ["Fabi", "Banana", "Orange", "Nemo", "Minion"];

// For Each Example
// allows us to simplify things
// function following ES6 syntax
const findNemo = (array) => {
  array.forEach((i) => {
    if (i === "Nemo") {
      console.log("FOUND NEMO!");
    } else {
      console.log("I CAN NOT FIND HIM!");
    }
  });
};

findNemo(Nemo);

// FOR OF LOOP
