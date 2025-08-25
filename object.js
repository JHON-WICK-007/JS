const profile = {
    name: "Manan",
    age: 30,
    hobbies: ["Reading", "Traveling"],
    printage: function() {
        console.log("age is " + this.age);
    },
    address: {
        city: "New York",
        country: "USA"
    }
}

console.log("Profile Object :", typeof(profile));
console.log("Profile Object :", profile);

console.log("Name:", profile.name);
console.log("Age:", profile.age);
console.log("Hobbies:", profile.hobbies);
profile.printage(); 
console.log("City:", profile.address.city);
console.log("Country:", profile.address.country);

const student1 = {
    name: "Manan",
    calcfee(){
        console.log("Fee is 10000000000");
    }
}

const student2 = {
    name: "Raj"
}

student2.__proto__ = student1; // student2 inherits from student1

// console.log(student2);  // It prints only it's own properties of student2
student2.calcfee();
// if student2 also have a function having a same name as student1 then it will override the student1 function. and print only of the student2 function.