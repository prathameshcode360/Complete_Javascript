// Object-Oriented Programming (OOP) Concepts

// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Inheritance
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

let john = new Person("John", 30);
john.greet();

let jane = new Employee("Jane", 28, "Developer");
jane.greet();
jane.work();

// Encapsulation
class Car {
    constructor(brand) {
        this._brand = brand; // Private property
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }
}

let myCar = new Car("Toyota");
console.log(myCar.brand);
myCar.brand = "Honda";
console.log(myCar.brand);
