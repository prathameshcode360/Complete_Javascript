// Types of Functions

// Anonymous Function
const anonymousFunction = function() {
    console.log("This is an anonymous function");
};
anonymousFunction();

// Arrow Function
const arrowFunction = () => {
    console.log("This is an arrow function");
};
arrowFunction();

// Higher-Order Function
const higherOrderFunction = (fn) => {
    fn();
};
higherOrderFunction(() => {
    console.log("This is a higher-order function");
});
