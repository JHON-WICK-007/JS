let str = "MANAN";

// for...of is used to iterate over iterable values (like strings or arrays)
for(let i of str) {
    console.log(i);  // Outputs: M A N A N (each letter on a new line)
}

const obj = {
    name: "MANAN",
    age: 20,
    id: 1,
}

// for...in is used to iterate over object keys (properties)
for(let key in obj) {
    // console.log(key, obj.key); 
    // ❌ Incorrect: obj.key tries to access a property literally called "key"
    // ✅ Correct way is:
    console.log(key, obj[key]); 
    // This accesses the value dynamically using the key
}

let x = {
    name : "pen",
    price : 3030
};

// ✅ Using template literals (backticks ` ` and ${})
let output = `The price of ${x.price} is ${x.name}`;
console.log(output);  
// Output: The price of 3030 is pen
// Explanation: Template literals allow embedding variables directly into the string using ${}
// It's cleaner and more readable

// ✅ Using traditional string concatenation with +
console.log("The price of " + x.price + " is " + x.name);  
// Output: The price of 3030 is pen
// Explanation: The same result, but less clean and harder to read when variables increase