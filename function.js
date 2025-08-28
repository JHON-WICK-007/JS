// Arrow function to add two numbers
const arrowsum = (a, b) => {
    return a + b;
}
console.log(arrowsum(3, 5)); // Output: 8

// Arrow function with no parameters that logs "Hello"
const hello = () => {
    console.log("Hello");
}
hello(); // Logs "Hello" and then 'undefined' because console.log(hello()) prints the return value of hello(), which is undefined

// 👉 Loops through each element of the array (does not return a new array).
let arr = [1, 2, 3, 4, 5];
arr.forEach((element, idx, arr) => {
    // Logs element, its index, and the whole array
    console.log(element, idx, arr);
});

// 👉 Creates a new array by applying a function to each element.
// map to multiply each element of the array by 10
let num = [1, 2, 3, 4, 5];
let number = num.map((val) => {
    return val * 10; // Each value is multiplied by 10
});
console.log(number); // Output: [10, 20, 30, 40, 50]

// 👉 Creates a new array with elements that satisfy a condition.
// filter to return only values greater than 5
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = num1.filter((val) => {
    return val > 5; // Only values greater than 5 are kept
});
console.log(filter); // Output: [6, 7, 8, 9, 10]

// 👉 Reduces the array to a single value by applying a function (accumulator + current value).
// reduce to calculate the sum of all elements
let mark = [1, 2, 3, 4];
let sum = mark.reduce((acc, cur) => {
    return acc + cur; // Accumulates the sum
});
console.log(sum); // Output: 10