"use strict";
class Person_c8 {
    takeNap() {
        console.log("I am sleeping 8h per day");
    }
}
class Student_c8 extends Person_c8 {
    takeNap() {
        console.log("I am sleeping 10h per day");
    }
}
class Developer extends Person_c8 {
    takeNap() {
        console.log("I am sleeping 5h per day");
    }
}
function getNap(params) {
    params.takeNap();
}
const person1 = new Person_c8();
const person2 = new Student_c8();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
// area -> pi *r *r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(params) {
    console.log(params.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
