"use strict";
function add_c4(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add_c4("1", "2");
add_c4(1, 2);
function getUser(user) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: "Mr. Kallu" };
const adminUser1 = { name: "Mr. Gallu", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
//: ---------------------------- instance of guard ---------------------------- */
class Animal_c4 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class Dog extends Animal_c4 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`I am barking`);
    }
}
class Cat extends Animal_c4 {
    constructor(name, species) {
        super(name, species);
    }
    makeMeow() {
        console.log(`I am meowing`);
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}
// function getAnimal(animal: Animal_c4) {
// 	if (animal instanceof Dog) {
// 		animal.makeBark();
// 	} else if (animal instanceof Cat) {
// 		animal.makeMeow();
// 	} else {
// 		animal.makeSound();
// 	}
// }
const animal1 = new Dog("German Bhai", "dog"); // instance -> dog
const animal2 = new Cat("Persian Bhai", "cat"); // instance -> cat
getAnimal(animal1);
getAnimal(animal2);
