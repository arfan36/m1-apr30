"use strict";
let emni;
emni = "Next Level web development";
// (emni as string).length;
emni.length; //# same as previous line
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value + "gram";
    }
}
// const resultToBeNumber = kgToGram(1000) as number;
const resultToBeNumber = kgToGram(1000); //# same as previous line
const resultToBeString = kgToGram("1000");
try {
}
catch (err) {
    console.log(err.message);
}
