// Define an array named 'mark'
let mark = [20, 40, 60, 80, 100];
console.log(mark.toString()); // Convert array to a comma-separated string and print
console.log(mark); // Output the entire array
console.log(mark.length); // Output the number of elements in the array (5)
console.log(typeof mark); // Output the type of 'mark' (which is 'object', since arrays are objects in JS)

// Define another array 'mark1'
let mark1 = [2, 4, 6, 8, 10];
console.log(mark.concat(mark1)); // Concatenate 'mark' and 'mark1' and print the new combined array
console.log(mark.join("-"));     // Join elements of 'mark' into a string separated by '-'
console.log(mark1.includes(10)); // return true or false, if 10 is present in 'mark1'

// Create an array of student IDs
let id = [101, 102, 103, 104, 105];
id.push(106); // Add 106 to the end of the array
console.log(id); // Output updated array
id.pop(); // Remove the last element from the array (106)
console.log(id); // Output updated array after removal
console.log(id.indexOf(104)); // Find the index of element 104 in the array (return 3)

// Create a DC heroes array
let dc = ["superman"];
dc.unshift("batman"); // Add 'batman' at the beginning of the array
console.log(dc); // Output: ["batman", "superman"]
dc.shift(); // Remove the first element (batman) from the array
console.log(dc); // Output: ["superman"]
console.log(dc.includes("superman"));  // Check if 'superman' is in the array (returns true)

// Create an age array
let age = [1, 2, 3, 4, 5];
console.log(age.slice(0, 4)); // Slice elements from index 0 to 3 (not including 4): [1, 2, 3, 4]
console.log(age); // Original array remains unchanged: [1, 2, 3, 4, 5]
console.log(age.splice(2, 3, 101, 102));
// Start at index 2, remove 3 elements (3, 4, 5), and insert 101, 102 at that place
// Returns the removed elements: [3, 4, 5]
// Modifies the original array to: [1, 2, 101, 102]
console.log(age); // Output modified array: [1, 2, 101, 102]

console.log(Array.isArray("MANAN")); // Check if "MANAN" is an array or not
console.log(Array.from("MANAN")); // Convert the string "MANAN" into an array of characters