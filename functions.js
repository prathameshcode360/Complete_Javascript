// Functions

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(greet("Alice"));
console.log(add(5, 3));
console.log(multiply(4, 2));
