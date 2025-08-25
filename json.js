// Create a JavaScript object
const student = {
    name: "Jane",
    age: 25,
    courses: ["Math", "Statistics"]
};

// Convert the object to a JSON string                     // Object ➡️ JSON string
const jsonString = JSON.stringify(student);
console.log("JSON String : " + jsonString);

// Convert the JSON string back to a JavaScript object     // JSON string ➡️ Object
const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object : " , parsedStudent);

// Accessing object properties after parsing
console.log("Student Name : ", parsedStudent.name);
console.log("Courses : ", parsedStudent.courses);