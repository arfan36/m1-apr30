"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My Current Balance: ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance += amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        // this._balance = 0;
    }
}
const myAccount = new BankAccount(444, "Persian", 20);
// myAccount._balance = 0;
console.log(myAccount);
myAccount.addDeposit(30);
myAccount.getBalance();
