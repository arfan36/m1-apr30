class BankAccount_c6 {
	public readonly id: number;
	public name: string;
	private _balance: number;

	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}

	private getTestBalance(): number {
		return this._balance;
	}

	get Test(): number {
		return this.getTestBalance();
	}

	// getter
	get balance(): number {
		return this._balance;
	}
	// getBalance(): number {
	// 	return this._balance;
	// }

	// setter
	set deposit(amount: number) {
		this._balance = this._balance + amount;
	}
	// addDeposit(amount: number) {
	// 	this._balance = this._balance + amount;
	// }
}

class StudentAccount_c6 extends BankAccount_c6 {
	test() {
		this.Test;
	}
}

const myAccount_c6 = new BankAccount_c6(444, "Persian", 30);
// myAccount.balance = 0;
console.log(myAccount_c6.balance);
myAccount_c6.deposit = 30;
console.log(myAccount_c6.balance);
