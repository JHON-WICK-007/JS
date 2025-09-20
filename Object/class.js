class superhero {
    constructor(name, power, city) {
        this.name = name;
        this.power = power;
        this.city = city;
        console.log("Creating a superhero instance");
    }

    display() {
        console.log("I am Batman\n");
    }
}

let batman = new superhero("batman", "darkness", "gotham");
console.log(batman);

let superman = new superhero("superman", "power", "krypton");
console.log(superman);
console.log("");                // for new line

class parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Creating a parent instance");
    }

    display() {
        console.log(`Parent Name: ${this.name}, Age: ${this.age}`);
    }
}

class child extends parent {
    constructor(name, age, school) {
        super(name, age);                  // calling parent constructor(parameters)
        this.school = school;
        console.log("Creating a child instance");
    }

    display() {
        super.display();
        console.log(`Child School: ${this.school}`);
    }
}

let parent1 = new child("John", 40, "New York");
console.log(parent1);
parent1.display();