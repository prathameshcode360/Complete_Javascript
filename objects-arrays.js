// Objects and Arrays

// Object
let person = {
    name: "John",
    age: 30,
    greet: function () {
        return "Hello, " + this.name;
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());

// Array
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Orange");
console.log(fruits);
