// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 1.
	//Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження).
	// На основі класу Person розробити клас Worker(додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; 
	// методи: визначення кількості виплачених коштів за рік, та визначення розміру податків).

	class Person {
		constructor(name, address, userAge) {
			this.name = name
			this.address = address
			this.UserAge = userAge
		}
		#userAge
		get UserAge() {
			return this.#userAge
		}
		set UserAge(newUserAge) {
			if (newUserAge < 0 || newUserAge > 130) throw new Error('Вік некоректний')
			this.#userAge = newUserAge
		}
		getYearOfBirth(currentYear = 2025) {
			return currentYear - this.UserAge
		}
		toString() {
			return `<p class="text">${this.name} - ${this.address} - ${this.UserAge} років - ${this.getYearOfBirth()} року народження,  </p>`
		}
	}

	// const Person1 = new Person('Вовченко М.С.', 'Одеса, вул. Малиновського 12', 40)

	// Person1.toString()
	// document.write(Person1.toString())

	class Worker extends Person {
		constructor(name, address, userAge, position, salary, percentOfTax = 20) {
			super(name, address, userAge)
			this.position = position
			this.Salary = salary
			this.PercentOfTax = percentOfTax
		}
		#salary
		get Salary() {
			return this.#salary
		}
		set Salary(newSalary) {
			if (newSalary <= 0) throw new Error('Зарплата не може бути відємною або дорівнювати нулю')
			this.#salary = newSalary
		}
		#percentOfTax
		get PercentOfTax() {
			return this.#percentOfTax
		}
		set PercentOfTax(newPercentOfTax) {
			if (newPercentOfTax < 0 || newPercentOfTax > 100) throw new Error('Податок має бути від нуля до 100')
			this.#percentOfTax = newPercentOfTax
		}
		getAmountOfPaidPerYear(countOfMonth = 12) {
			return this.Salary * countOfMonth
		}
		getAmountOfTaxes() {
			return this.getAmountOfPaidPerYear() * this.PercentOfTax / 100
		}
		toString() {
			return (
				super.toString() + `<p class="text"> ${this.position} - зарплата/рік: ${this.getAmountOfPaidPerYear()} грн (зарплата/міс: ${this.Salary}грн)
			- розмір податку за рік: ${this.getAmountOfTaxes()} грн </p>`
			)
		}
	}

	const Worker1 = new Worker('Вовченко М.С.', 'Одеса, вул. Малиновського 12', 40, 'бухгалтер', 30000)
	document.write(Worker1.toString())

}