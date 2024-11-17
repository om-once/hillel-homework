class BankAccount {
	#balance;

	constructor(initialBalance) {
		if (initialBalance < 0) {
			alert('Баланс не може бути від’ємним');
		}
		this.#balance = initialBalance;
	}

	getBalance() {
		return this.#balance;
	}

	deposit(value) {
		if (value <= 0) {
			alert('Сума для внесення має бути більше нуля');
		}
		this.#balance += value;
	}

	withdraw(value) {
		if (value <= 0) {
			alert('Сума для зняття має бути більше нуля');
		}
		if (this.#balance >= value) {
			this.#balance -= value;
		} else {
			alert('У вас не достатньо коштів на рахунку!');
		}
	}
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
