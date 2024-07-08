// Array Methods

let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));

// map
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// some
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

// every
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);

// find
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// findIndex
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);

// includes
let includesThree = numbers.includes(3);
console.log(includesThree);

// push
numbers.push(6);
console.log(numbers);

// pop
numbers.pop();
console.log(numbers);

// shift
numbers.shift();
console.log(numbers);

// unshift
numbers.unshift(0);
console.log(numbers);

// splice
numbers.splice(2, 1);
console.log(numbers);

// slice
let sliced = numbers.slice(1, 3);
console.log(sliced);

// concat
let moreNumbers = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);

// join
let joined = numbers.join('-');
console.log(joined);

// reverse
let reversed = numbers.reverse();
console.log(reversed);

// sort
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted);
