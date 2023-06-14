"use strict";
class Animal {
    constructor(name, species, sounds) {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sounds}`); // 'German Shepherd says Growl Growl'
    }
}
const dog = new Animal("German Shepherd", "dog", "Growl Growl");
const cat = new Animal("Persian cat", "cat", "meow meow");
dog.makeSound();
cat.makeSound();
cat.name = "Special Cat";
