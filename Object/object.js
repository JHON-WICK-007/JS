const profile = {
    name: "Manan",
    age: 30,
    hobbies: ["Reading", "Traveling"],
    printage: function () {
        console.log("age is " + this.age);
    },
    address: {
        city: "New York",
        country: "USA"
    }
}

console.log("Profile Object :", typeof (profile));
console.log("Profile Object :", profile);

console.log("Name:", profile.name);
console.log("Age:", profile.age);
console.log("Hobbies:", profile.hobbies);
profile.printage();
console.log("City:", profile.address.city);
console.log("Country:", profile.address.country);