// if you want to same optput then use it, but var is not a good practice in modern js
var y = 10;
{
    var y = 20; // This modifies the same `y`
    console.log("Inside block (var):", y); // Output: 20
}
console.log("Outside block (var):", y); // Output: 20

// Using var (function-scoped)
var a = 10;
var a = 20; // ✅ Allowed: var allows redeclaration
console.log(a); // Output: 20

// let only goes with the scope of the block, so it is not allowed to redeclare
let x = 10; // Global (outer) scope
{
    let x = 20; // Block scope (inside these curly braces)
    console.log("Inside block:", x); // Output: 20
}
console.log("Outside block:", x); // Output: 10

// Using let (block-scoped)
let b = 30;
// let b = 40; // ❌ Error: Cannot redeclare 'b' in the same block
b = 40; // ✅ Allowed: we can reassign
console.log(b); // Output: 40

// Using const (block-scoped and constant)
const c = 50;
// c = 60; // ❌ Error: Cannot reassign a const variable
console.log(c); // Output: 50

const ff = 70;
let name = "John";
var gg = 'k';
city = "London"; // ❌ Error: 'city' is not defined

console.log("");
// create a table for printing the values of variables
console.table([ff, name, gg, city]);