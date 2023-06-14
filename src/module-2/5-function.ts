//~ normal function
//# default parameters

function add_5a(num1: number, num2: number = 10): number {
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
const greatFriends = (...friends: string[]): void =>
	friends.forEach((friend) => console.log(`Hi ${friend}`));

greatFriends(
	"kashem",
	"hashem",
	"gashem",
	"lashem",
	"bangla vai",
	"english vai"
);

//# array and object destructuring

const arr = [1, 4, 5, 7];
const newArray = arr.map((elem: number) => elem * elem);

const person: {
	name: string;
	balance: number;
	addBalance(money: number): void;
} = {
	name: "Mezba",
	balance: 5,
	addBalance(money: number) {
		// return `My balance is ${this.balance + money}`;
		console.log(`My New balance: ${this.balance + money}`);
	},
};
