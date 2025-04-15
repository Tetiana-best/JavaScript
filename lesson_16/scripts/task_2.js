// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Створити клас TMoney для роботи з грошовими сумами. 
	// Сума повинна зберігатися у вигляді доларового еквіваленту. 
	// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, 
	// при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 
	class TMoney {
		constructor(hrnSum, usdExchangeRate, usdBalance) {
			// захищене поле, використовуємо приватне поле(#) і setter
			this.USDExchangeRate = usdExchangeRate
			// захищене поле, використовуємо приватне поле(#) і setter
			this.HrnSum = hrnSum
			// захищене поле, використовуємо приватне поле(#) і setter
			this.UsdBalance = usdBalance
			// ---------------------------------------------
			this.newrate = this.newRate()
		}
		// Курс долара
		#usdExchangeRate
		get USDExchangeRate() {
			return this.#usdExchangeRate
		}
		set USDExchangeRate(newUSDExchangeRate) {
			if (newUSDExchangeRate < 0) throw new Error(`<p class="text">Курс долара не може бути відємним!<br> </p>`)
			this.#usdExchangeRate = newUSDExchangeRate
		}
		// доларовий рахунок
		#usdBalance
		get UsdBalance() {
			return this.#usdBalance
		}
		set UsdBalance(newUsdBalance) {
			if (newUsdBalance < 0) throw new Error(`<p class="text">Баланс не може бути відємним!<br> </p>`)
			this.#usdBalance = newUsdBalance
		}
		// гривнева сумма, яку вносить клієнт банку
		#hrnSum
		get HrnSum() {
			return this.#hrnSum
		}
		set HrnSum(newSum) {
			if (newSum < 0) throw new Error(`<p class="text">Сума яку Ви хочете додати/вилучити не може бути відємною!<br> </p>`)
			this.#hrnSum = newSum
		}
		// ------------------------------------------------------------------------------------------
		// методи додавання грошової маси, вказуючи необхідну суму у гривнях
		addSum() {
			return this.UsdBalance = this.UsdBalance + this.HrnSum / this.USDExchangeRate
		}
		// методи вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара
		removeSum() {
			return this.UsdBalance = this.UsdBalance - this.HrnSum / this.USDExchangeRate
		}
		// методи знаходження нового курсу доллара, при якому сума у гривнях збільшиться на 100
		newRate() {
			return (this.UsdBalance * this.USDExchangeRate + 100) / this.UsdBalance
		}
		// -----------------
		toString() {
			return `<p class="text">Ваші ${this.HrnSum}грн. після додавання/вилучення становить: ${this.UsdBalance}$, 
		а курс доллара, при якому сума у гривнях збільшиться на 100 грн становить: ${this.newrate} грн за 1$</p> `
		}
	}

	try {
		const TMoney1 = new TMoney(400, 40, 100)
		// TMoney1.addSum()
		// TMoney1.removeSum()
		TMoney1.newRate().toFixed(0)
		document.write(TMoney1)
	} catch (error) {
		document.write(error.message);
	}
	document.write(`<p class="text">Гарного дня!</p>`)

}
