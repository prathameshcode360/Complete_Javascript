// Hoisting

console.log(hoistedVar); // undefined
var hoistedVar = 'This is hoisted';

hoistedFunction(); // Works
function hoistedFunction() {
    console.log('This function is hoisted');
}

// let and const are not hoisted in the same way
// console.log(notHoistedVar); // ReferenceError
let notHoistedVar = 'This is not hoisted';
