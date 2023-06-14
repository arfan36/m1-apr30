"use strict";
class Counter {
    static increment() {
        return (Counter.counter += 1); // Counter.counter = Counter.counter + 1
    }
    static decrement() {
        return (Counter.counter -= 1); // Counter.counter = Counter.counter - 1
    }
}
Counter.counter = 0;
// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment()); // 0 -> 1 // Counter mean class
console.log(Counter.increment()); // 1 -> 2 // Counter mean class
