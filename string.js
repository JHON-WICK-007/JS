// Declaring string variables
const name = "Manan";
const surname = "Vasani";

// Template literal to print a sentence using variables
console.log(`Hello my name is ${name} ${surname}.`); // Output: Hello my name is Manan Vasani.

// charAt(index) → returns the character at index 2 of "Manan"
console.log(name.charAt(2)); // Output: 'n'
console.log(name.length); // Output: 5

// indexOf('M') → returns the index of first occurrence of 'M' in "Manan"
console.log(name.indexOf('M')); // Output: 0

// slice(start, end) → extracts characters from index 1 to 3 in "Vasani"
console.log(surname.slice(1, 4)); // Output: 'asa'

// Trimming whitespace from both ends of a string
str = "  bbbb  ";
console.log(str.trim()); // Output: 'bbbb'

// Replacing "Hello" with "Hi" in a string
str = "Hello, World!";
console.log(str.replace('Hello', 'Hi')); // Output: 'Hi, World!'

// Checking if substrings are included
str1 = " hii,hello how are you";
console.log(str1.includes('hii')); // Output: true
console.log(str1.includes('HII')); // Output: false (case-sensitive)

// Converting string to uppercase
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'
// Converting string to lowercase
console.log(str.toLowerCase()); // Output: 'hello, world!'

// Concatenating two strings
console.log(str.concat(str1)); // Output: 'Hello, World! hii,hello how are you'