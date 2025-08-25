// Printing a string
console.log("Manan"); // Output: Manan

// typeof returns the type of the value (in this case, a string)
console.log(typeof "Manan"); // Output: string

// typeof null is actually 'object' (this is a known JavaScript quirk/bug)
console.log(typeof null); // Output: object

// undefined means a variable has been declared but not assigned a value
console.log(typeof undefined); // Output: undefined

// Creating an object with two properties
const product = {
    name: "raj",
    surname: "vasani"
};

// Logging the object
console.log(product); // Output: { name: "raj", surname: "vasani" }

// typeof an object is 'object'
console.log(typeof product); // Output: object  