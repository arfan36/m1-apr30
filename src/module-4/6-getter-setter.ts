// class BankAccount {
// 	public readonly id: number;
// 	public name: string;
// 	private _balance: number;

// 	constructor(id: number, name: string, balance: number) {
// 		this.id = id;
// 		this.name = name;
// 		this._balance = balance;
// 	}

// 	// getter
// 	get balance(): number {
// 		return this._balance;
// 	}
// 	// getBalance(): number {
// 	// 	return this._balance;
// 	// }

// 	// setter
// 	set deposit(amount: number) {
// 		this._balance = this._balance + amount;
// 	}
// 	// addDeposit(amount: number) {
// 	// 	this._balance = this._balance + amount;
// 	// }
// }

// class StudentAccount extends BankAccount {
// 	test() {
// 		// this._balance = 0;
// 	}
// }

// const myAccount = new BankAccount(444, "Persian", 30);
// // myAccount.balance = 0;
// console.log(myAccount.balance);
// myAccount.deposit = 30;
// console.log(myAccount.balance);
