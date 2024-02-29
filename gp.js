//FAVORITE COLORS
// Create an array called "colors"
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// Log the colors array to the console
console.log(colors);

// Use shift() to remove the first element and store it in "firstColor"
let firstColor = colors.shift();

// Use pop() to remove the last element and store it in "lastColor"
let lastColor = colors.pop();

// Log the updated colors array to the console
console.log(colors);

// Use push() to add "pink" to the end of the array
colors.push("pink");

// Use unshift() to add "brown" to the beginning of the array
colors.unshift("brown");

// Use slice() to create a new array "newColors"
let newColors = colors.slice(1, 4);

// Use join() to combine elements of newColors into a string separated by commas
let newColorsString = newColors.join(", ");

// Try passing a string as an argument into .join()
let joinedColors = newColors.join(" | ");

// Create a copy of "colors" using spread operator
let colorsCopy = [...colors];

// Log the results to the console
console.log("Updated colors array:", colors);
console.log("First color removed:", firstColor);
console.log("Last color removed:", lastColor);
console.log("New colors array:", newColors);
console.log("Joined newColors:", newColorsString);
console.log("Joined newColors with custom separator:", joinedColors);
console.log("Copy of colors array:", colorsCopy);

//JavaScript Objects
 
// Create an object called "person"
let person = {
    name: "John",
    age: 25,
    favoriteColors: ["red", "blue"],
};

// Print the person object to the console
console.log(person);

// Access properties and store in variables
let name = person.name;
let age = person.age;
let favoriteColors = person.favoriteColors;

// Print variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Colors:", favoriteColors);

// Add a new property to the person object
person.favoriteFood = "pizza";

// Delete "favoriteColors" property
delete person.favoriteColors;

// Create a newPerson variable using spread operator
let newPerson = { ...person };

// Change properties on newPerson
newPerson.name = "Jane";
newPerson.age = 30;

// Log both objects to the console
console.log("Original person object:", person);
console.log("Modified newPerson object:", newPerson);

// Bonus: Use Object.assign to reassign multiple values
Object.assign(person, { name: "Mike", age: 22 });

// Create a method to return the person's name
person.getName = function () {
    return this.name;
};

// Log the person object after modifications
console.log("Updated person object:", person);

// Call the getName method and log the result
console.log("Person's name:", person.getName());

