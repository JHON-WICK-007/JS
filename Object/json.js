// Create a JavaScript object
const student = {
    name: "Jane",
    age: 25,
    courses: ["Math", "Statistics"]
};

// Convert the object to a JSON string                     // Object ➡️ JSON string
const jsonString = JSON.stringify(student);
console.log("JSON String : " + jsonString);

// jsonString = {"name":"Jane","age":25,"courses":["Math","Statistics"]}
console.log(jsonString[10]);  // Prints the character at index 10 of the JSON string → "a"

// Convert the JSON string back to a JavaScript object     // JSON string ➡️ Object
const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object : ", parsedStudent);

// Accessing object properties after parsing
console.log("Student Name : ", parsedStudent.name);
console.log("Courses : ", parsedStudent.courses);


// Define a student object
const stu = {
  name: "Bhavika",
  age: 21,
  course: "Computer Science",

  // Custom toJSON() method
  // This decides what will be included when the object is converted to JSON
  // hide to sensitive info like age
  toJSON() {
    return { name: this.name, course: this.course }; // Only include name and course
  }
};

// Convert the object to a JSON string
const jsonString1 = JSON.stringify(stu);

// Log the JSON string → {"name":"Bhavika","course":"Computer Science"}
console.log(jsonString1);


// JSON string representing an array of car brands
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';

// Parse JSON string into a real JavaScript array
const myArr = JSON.parse(text);

// Access the first element (index 0) of the array
console.log(myArr[0]); // Output: "Ford"