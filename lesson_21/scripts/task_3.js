// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. 
	// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
	// Вивести всіх простих клієнтів;
	// Вивести всіх клієнтів GoldenClient;
	// Знайти сумарну кількість грошей на рахунку;
	class Bank {
		constructor(array) {
			this.array = array
		}
		// Вивести всіх простих клієнтів;
		showSimpleClients() {
			const simpleClients = this.array.filter(client => client.type === 'Client');
			simpleClients.forEach(client => {
				document.write(`<p class="text">Простий клієнт: ${client.fullName}, баланс: ${client.balance} грн</p> <br>`);
			})
		}
		// Вивести всіх клієнтів GoldenClient;
		showAllGoldenClients() {
			const goldenClient = this.array.filter(client => client.type === 'GoldenClient');
			goldenClient.forEach(client => {
				document.write(`<p class="text">Golden клієнт: ${client.fullName}, баланс: ${client.balance} грн, 
					кредитний ліміт: ${client.creditLimit}, ставка: ${client.interestRate}%</p> <br>`)
			})
		}
		// Знайти сумарну кількість грошей на рахунку;
		getTotalBalance() {
			return this.array.reduce((prevSum, client) => prevSum + client.balance, 0)
		}

	}

	const clients = [
		{
			type: 'Client',
			id: '11111111111',
			fullName: 'Tom Hanks',
			balance: 15000
		},
		{
			type: 'GoldenClient',
			id: '22222222222',
			fullName: 'Brad Pitt',
			balance: 40000,
			creditLimit: 80000,
			interestRate: 4.5
		},
		{
			type: 'Client',
			id: '33333333333',
			fullName: 'Leonardo DiCaprio',
			balance: 9000
		},
		{
			type: 'GoldenClient',
			id: '44444444444',
			fullName: 'Johnny Depp',
			balance: 120000,
			creditLimit: 150000,
			interestRate: 3.8
		},
		{
			type: 'Client',
			id: '55555555555',
			fullName: 'Robert Downey Jr.',
			balance: 5000
		}
	];

	const Bank1 = new Bank(clients)
	// console.log(Bank1.showSimpleClients());
	// console.log(Bank1.showAllGoldenClients());
	Bank1.showSimpleClients()
	Bank1.showAllGoldenClients()
	document.write(`<p class="text"> Сумарна кількість грошей на рахунку ${Bank1.getTotalBalance()} грн</p>`)

}









