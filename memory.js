// stack (primitive)
let a = 10;

let b = a;
b = 20;

console.log(b);
console.log(a);

// Heap (Non-primitive)
// Create an object userone stored in heap memory
let userone = {
    name: 'John',
    id: 1,
    address: 'jkkkk'
};

// Assign usertwo to reference the same object as userone
let usertwo = userone;

// Since both variables reference the same object in heap, 
// changing usertwo will also reflect in userone
usertwo.id = 2002;

// Both will output 2002 because they point to the same object
console.log(userone.id);   // Output: 2002
console.log(usertwo.id);   // Output: 2002