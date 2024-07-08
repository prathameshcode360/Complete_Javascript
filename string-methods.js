// String Methods

let str = "Hello, World!";

// charAt
console.log(str.charAt(0));

// charCodeAt
console.log(str.charCodeAt(0));

// concat
console.log(str.concat(" How are you?"));

// includes
console.log(str.includes("World"));

// endsWith
console.log(str.endsWith("!"));

// startsWith
console.log(str.startsWith("Hello"));

// indexOf
console.log(str.indexOf("o"));

// lastIndexOf
console.log(str.lastIndexOf("o"));

// match
console.log(str.match(/o/g));

// repeat
console.log(str.repeat(3));

// replace
console.log(str.replace("World", "JavaScript"));

// search
console.log(str.search("World"));

// slice
console.log(str.slice(0, 5));

// split
console.log(str.split(", "));

// substring
console.log(str.substring(0, 5));

// toLowerCase
console.log(str.toLowerCase());

// toUpperCase
console.log(str.toUpperCase());

// trim
let spacedStr = "  Hello, World!  ";
console.log(spacedStr.trim());
