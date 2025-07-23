// Arrow function to add two numbers
const arrowsum = (a, b) => {
    return a + b;
}
console.log(arrowsum(3, 5)); // Output: 8

// Arrow function with no parameters that logs "Hello"
const hello = () => console.log("Hello");
console.log(hello()); // Logs "Hello" and then 'undefined' because console.log(hello()) prints the return value of hello(), which is undefined

// forEach to iterate over each element in the array
let arr = [1, 2, 3, 4, 5];
arr.forEach((element, idx, arr) => {
    // Logs element, its index, and the whole array
    console.log(element, idx, arr);
});

// map to multiply each element of the array by 10
let num = [1, 2, 3, 4, 5];
let number = num.map((val) => {
    return val * 10; // Each value is multiplied by 10
});
console.log(number); // Output: [10, 20, 30, 40, 50]

// filter to return only values greater than 5
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = num1.filter((val) => {
    return val > 5; // Only values greater than 5 are kept
});
console.log(filter); // Output: [6, 7, 8, 9, 10]

// reduce to calculate the sum of all elements
let mark = [1, 2, 3, 4];
let sum = mark.reduce((acc, cur) => {
    return acc + cur; // Accumulates the sum
});
console.log(sum); // Output: 10