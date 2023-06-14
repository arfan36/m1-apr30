"use strict";
class BankAccount_c6 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get Test() {
        return this.getTestBalance();
    }
    //, getter
    get balance() {
        return this._balance;
    }
    // getBalance(): number {
    // 	return this._balance;
    // }
    //, setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount_c6 extends BankAccount_c6 {
    test() {
        this.Test;
    }
}
const myAccount_c6 = new BankAccount_c6(444, "Persian", 30);
console.log(myAccount_c6.balance);
myAccount_c6.deposit = 30;
console.log(myAccount_c6.balance);
