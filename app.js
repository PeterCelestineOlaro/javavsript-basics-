1. Variables and Data Types
var name = "John";        // String
let age = 25;             // Number
const isStudent = true;   // Boolean
let hobbies = ["Reading", "Coding", "Gaming"]; // Array
let person = {            // Object
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,
  isEmployed: false
};

 Logging values to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student?", isStudent);
console.log("Hobbies:", hobbies);
console.log("Person:", person);

 2. Operators
let sum = 10 + 5;         // Addition
let product = 10 * 2;     // Multiplication
let isAdult = age >= 18;  // Comparison
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Is adult?", isAdult);

 3. Conditional Statements
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

 4. Loops
for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby:", hobbies[i]);
}

let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

 5. Functions
function greetUser(username) {
  return "Hello, " + username + "!";
}

let greeting = greetUser("Peter");
console.log(greeting);

 6. Arrow Functions
const addNumbers = (a, b) => a + b;
console.log("Sum using arrow function:", addNumbers(4, 6));

 7. Working with Objects
console.log("Person's name:", person.firstName + " " + person.lastName);
person.age += 1;  // Increment age
console.log("Updated Age:", person.age);
 8. Template Literals
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

 9. Array Methods
hobbies.push("Traveling");   // Add a new hobby
console.log("Updated hobbies:", hobbies);
hobbies.forEach((hobby) => console.log("I enjoy", hobby));

 10. Error Handling
try {
  let result = 10 / 0;  // Division by zero (infinity)
  if (!isFinite(result)) {
    throw new Error("Cannot divide by zero");
  }
} catch (error) {
  console.log("Error:", error.message);
}
