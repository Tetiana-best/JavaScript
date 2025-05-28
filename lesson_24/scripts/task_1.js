// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 1. Дано клас PhoneNumber.Створити функцію перетворення до string, при якому на основі номера 
	// виводиться оператор(050….à MTC, 096… à Kyivstar, ….)

	const operators = {
		'050': 'MTC',
		'066': 'MTC',
		'095': 'MTC',
		'099': 'MTC',
		'067': 'Kyivstar',
		'096': 'Kyivstar',
		'097': 'Kyivstar',
		'098': 'Kyivstar',
		'063': 'Lifecell',
		'073': 'Lifecell',
		'093': 'Lifecell'
	}

	class PhoneNumber {
		constructor(number, operatorsList) {
			this.Number = number
			this.operatorsList = operatorsList
		}
		#number
		get Number() {
			return this.#number
		}
		set Number(newNumber) {
			this.normalize(newNumber)
			if (!this.normalize(newNumber) || this.normalize(newNumber) < 10) throw new Error('Номер некоректний')
			this.#number = newNumber
		}
		normalize(number = this.Number) {
			const digits = number.replace(/\D/g, '')
			let result
			if (digits.startsWith('380')) result = '0' + digits.slice(3)
			if (digits.startsWith('0')) result = digits
			return result
		}
		getOperator() {
			const prefix = this.normalize().slice(0, 3)
			return this.operatorsList[prefix] || 'Невідомий оператор'
		}
		[Symbol.toPrimitive](hint) {
			let res
			switch (hint) {
				case 'string':
				case 'default':
					res = `<p class="text"> ${this.Number} - ${this.getOperator()}</p>`
					break
			}
			return res
		}
	}
	const PhoneNumber1 = new PhoneNumber('+38(063)758-55-36', operators)
	document.write(` ${PhoneNumber1}`)

}