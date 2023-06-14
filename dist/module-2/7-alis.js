"use strict";
const crush1_a7 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
};
const crush2_a7 = {
    name: "Tia Pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico",
};
const isCrushMarried = false;
const courseName = "Next Level Development";
const calculate = (number1, // 10
number2, // 20
operation // (x,y) =>x+y		(10,20)=>10+20
) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
