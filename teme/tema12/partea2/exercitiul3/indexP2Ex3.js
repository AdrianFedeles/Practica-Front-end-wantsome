//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)

/*1*/
class Account {
    constructor(location, name) {
        this.location = location;
        this.name = name;
    }
}
/*2*/
class Transaction {
    constructor(sender, bank, amount) {
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
    }
/*2.1*/
    finalSum() {
        this.amount - 10;
    }
}
/*3*/
class Table {
    constructor() {
        this.transactions = [];
    }
/*3.1*/
    addTransaction(functions) {
        return this.transactions.push(functions);
    }
}

const bankAccount = function bankAccount() { `${this.amount}` };
const transaction1 = function transaction1(value) { this.amount - value };
const transaction2 = function transaction2(value2) { this.amount + value2 };
const table = new Table;
table.addTransaction(bankAccount);
table.addTransaction(transaction1);
table.addTransaction(transaction2);
console.log(table);