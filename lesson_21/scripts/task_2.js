// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 2. Створити клас Client. 

	class Client {
		constructor(id, fullName, balance) {
			this.#id = id
			this.fullName = fullName
			this.Balance = balance
		}
		#id
		get ID() {
			return this.#id
		}
		#balance
		get Balance() {
			return this.#balance
		}
		set Balance(newBalance) {
			if (typeof newBalance !== 'number' || isNaN(newBalance) || newBalance < 0) throw new Error('Введіть коректне число для балансу(не відємне).')
			this.#balance = newBalance
		}
		// Додавання грошей
		deposit(amount) {
			this.Balance += amount
			return this.Balance
		}
		// Зняття грошей
		withrow(amount) {
			if (typeof amount !== 'number' || isNaN(amount)) {
				throw new Error('Сума повинна бути числом');
			}
			if (amount <= 0) {
				throw new Error('Сума повинна бути більшою за 0');
			}
			if (amount > this.Balance) {
				throw new Error('Сума, яку ви хочете зняти, перевищує ваш баланс');
			}
			this.Balance -= amount
			return this.Balance

		}
		toString() {
			return `<p class="text"> ${this.#id} - ${this.fullName} - Ваш баланс з урахуванням додавання/зняття коштів: ${this.Balance} грн</p>`
		}
	}

	// const Client1 = new Client('55544444411', 'Козаченко І.П.', 40000)

	// document.write(Client1.toString())

	class GoldenClient extends Client {
		constructor(id, fullName, balance, creditLimit, creditInterestRate) {
			super(id, fullName, balance)
			this.CreditLimit = creditLimit
			this.CreditInterestRate = creditInterestRate
		}
		#creditLimit
		get CreditLimit() {
			return this.#creditLimit
		}
		set CreditLimit(newCreditLimit) {
			if (typeof newCreditLimit !== 'number' || isNaN(newCreditLimit) || newCreditLimit < 0) throw new Error('Ліміт кредитних коштів має бути невід’ємним числом')
			this.#creditLimit = newCreditLimit
		}
		#creditInterestRate
		get CreditInterestRate() {
			return this.#creditInterestRate
		}
		set CreditInterestRate(newCreditInterestRate) {
			if (typeof newCreditInterestRate !== 'number' || isNaN(newCreditInterestRate) || newCreditInterestRate < 0 || newCreditInterestRate > 100)
				throw new Error('Відсоткова ставка має бути числом від 0 до 100.')
			this.#creditInterestRate = newCreditInterestRate
		}
		getCreditInterest() {
			return this.CreditLimit * this.CreditInterestRate / 100
		}

		toString() {
			return (
				super.toString() + `<p class="text"> Кредитний ліміт: ${this.CreditLimit} грн - Пеня за використання кредитних коштів: ${this.getCreditInterest()} грн</p>`
			)
		}
	}

	const GoldenClient1 = new GoldenClient('55544444411', 'Козаченко І.П.', 40000, 100000, 5)
	GoldenClient1.deposit(800)
	GoldenClient1.withrow(500)
	document.write(GoldenClient1.toString())

}
