class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`
            Account Number: ${this.accountNumber}
            Owner Name: ${this.ownerName}
            Balance: $${this.balance}
        `);
    }
}


const account1 = new BankAccount(1001, "Farhana  Esha", 1000);
const account2 = new BankAccount(1002, "Sadman Said", 500);


account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();

account2.deposit(1000);
account2.withdraw(700);
account2.displayAccountInfo();
