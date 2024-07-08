// ES6 Features

// Let and Const
let x = 10;
const y = 20;

// Template Literals
let name = "Alice";
console.log(`Hello, ${name}!`);

// Default Parameters
function greet(message = "Hello") {
    console.log(message);
}
greet();
greet("Hi");

// Destructuring
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(name, age);

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3));
