class Person_c8 {
	takeNap(): void {
		console.log("I am sleeping 8h per day");
	}
}

class Student_c8 extends Person_c8 {
	takeNap(): void {
		console.log("I am sleeping 10h per day");
	}
}

class Developer extends Person_c8 {
	takeNap(): void {
		console.log("I am sleeping 5h per day");
	}
}

function getNap(params: Person_c8) {
	params.takeNap();
}

const person1 = new Person_c8();
const person2 = new Student_c8();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
	getArea(): number {
		return 0;
	}
}

// area -> pi *r *r
class Circle extends Shape {
	radius: number;
	constructor(radius: number) {
		super();
		this.radius = radius;
	}
	getArea(): number {
		return Math.PI * this.radius * this.radius;
	}
}

class Rectangle extends Shape {
	width: number;
	height: number;
	constructor(height: number, width: number) {
		super();
		this.width = width;
		this.height = height;
	}
	getArea(): number {
		return this.width * this.height;
	}
}

function getAreaOfShape(params: Shape) {
	console.log(params.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
