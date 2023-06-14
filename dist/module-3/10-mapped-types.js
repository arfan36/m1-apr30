"use strict";
const arrayOfNumbers = [1, 2, 3]; // ['1', '2', '3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log("🚀 ~ arrayOfStrings:", arrayOfStrings);
const area1 = {
    height: 10,
    width: "10",
};
const rectangularArea = {
    height: 10,
    width: 12,
};
// rectangularArea.width = 10;
// type A = AreaNumber["height"]; //: look up types > property value
// type B = AreaNumber; //: 'width' | 'height
const obj = {
    name: "Persian",
};
obj["name"]; // 'Persian'
