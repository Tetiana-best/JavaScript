// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// 	Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із
	// номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат,
	// та метод зняття деякої суми.


	class TBankomat {
		constructor(initialBanknotesList) {
			this.BanknotesList = initialBanknotesList
		}
		// 	масив банкнот
		#initialBanknotesList
		get BanknotesList() {
			return this.#initialBanknotesList
		}
		set BanknotesList(newBanknotesList) {
			if (newBanknotesList.length === 0)
				throw new Error(`<p class="text">Масив банкнот не може бути порожнім! </p>`)
			this.#initialBanknotesList = newBanknotesList
		}

		// ------------------------------------------------------------------------------------------
		// метод знаходження максимальної суми, які може видати банкомат

		getMaxSum() {
			const maxSum = this.BanknotesList.reduce((prevSum, banknote) => (prevSum + banknote.Value * banknote.Count), 0)
			return maxSum
		}

		//метод знаходження мінімальної суми, які може видати банкомат
		getMinSum() {
			let min = Infinity
			for (const banknote of this.BanknotesList) {
				if (banknote.Value < min && banknote.Count > 0) min = banknote.Value
			}
			return min === Infinity ? 0 : min
		}

		// метод зняття деякої суми.
		withdraw(amount) {
			const sortedBankomatList = [...this.BanknotesList].sort((a, b) => b.Value - a.Value)

			let planGiveArray = []

			for (const banknote of sortedBankomatList) {
				let needed = Math.floor(amount / banknote.Value)
				let takedCount = Math.min(needed, banknote.Count)

				if (takedCount > 0) {
					planGiveArray.push({ value: banknote.Value, count: takedCount })
					amount = amount - (takedCount * banknote.Value)
				}
			}
			if (amount > 0) throw new Error(`<p class="text">Банкомат не може видати вказану суму! </p>`)
			return planGiveArray
		}
		// -----------------
		toString() {
			return `<p class="text">Банкомат може видати максимальну сумму: ${this.getMaxSum()}грн, мінімальну сумму: ${this.getMinSum()}грн.<br></p> `
		}
	}

	class Banknote {
		constructor(value, count) {
			this.Value = value
			this.Count = count
		}
		// 	номінал банкноти
		#value
		get Value() {
			return this.#value
		}
		set Value(newValue) {
			if (!newValue || newValue < 0)
				throw new Error(`<p class="text">Номінал банкноти не може бути порожнім або відємним ! </p>`)
			this.#value = newValue
		}

		// 	кількість купюр
		#count
		get Count() {
			return this.#count
		}
		set Count(newCount) {
			if (!newCount || newCount < 0)
				throw new Error(`<p class="text">Кількість купюр не може бути порожньою або відємною ! </p>`)
			this.#count = newCount
		}

		// ------------------------------------------------------------------------------------------

		toString() {
			return `<p class="text"> ${this.Value}-${this.Count}</p> `
		}
	}

	// ------------------------------------
	try {
		const banknotesArr = [
			new Banknote(200, 10),
			new Banknote(100, 10),
			new Banknote(50, 15),
			new Banknote(20, 10),
			new Banknote(10, 15),
			new Banknote(5, 10),
		];
		const TBankomat1 = new TBankomat(banknotesArr)
		document.write(TBankomat1)
		TBankomat1.getMaxSum()
		TBankomat1.getMinSum()
		console.log(TBankomat1.withdraw(535))

	} catch (error) {
		document.write(error.message);
	}
	document.write(`<p class="text"><br>Гарного дня!</p>`)

}