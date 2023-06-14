"use strict";
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours} hours`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student("Mr.X", 15, "Uganda");
// student1.
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
const teacher1 = new Teacher("Mr.Y", 54, "USA", "Professor");
// teacher1.
