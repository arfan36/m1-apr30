// normal function

function add(num1: number, num2: number): number {
	return num1 + num2;
}

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
