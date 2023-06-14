"use strict";
//~ normal function
//# default parameters
function add_5a(num1, num2 = 10) {
    return num1 + num2;
}
add_5a(30, 50);
//# spread operator
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "phoebe"];
const myBestFriend = {
    fullName: "Abul Bashar",
    age: 24,
};
const [bestFriend, f2, f3] = myFriends; // array destructuring -> first index first
const { fullName: string } = myBestFriend; // object destructuring
console.log({ string }); // string -> name alias(variable)
myFriends.push(...newFriends);
// console.log("🚀 ~ myFriends:", myFriends);
//#  rest parameters
const greatFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greatFriends("kashem", "hashem", "gashem", "lashem", "bangla vai", "english vai");
//# array and object destructuring
const arr = [1, 4, 5, 7];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Mezba",
    balance: 5,
    addBalance(money) {
        // return `My balance is ${this.balance + money}`;
        console.log(`My New balance: ${this.balance + money}`);
    },
};
