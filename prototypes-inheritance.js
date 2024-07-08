// Prototypes and Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let john = new Person("John", 30);
john.greet();

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

let jane = new Employee("Jane", 28, "Developer");
jane.greet();
jane.work();
