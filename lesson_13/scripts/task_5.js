// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	function getMonthNumCounter(initValue) {
		let currentMonthNum
		function isInitValue() {
			if (initValue >= 1 && initValue <= 12) currentMonthNum = initValue
			else throw new Error("Значення номера місяця не корректне");
		}
		isInitValue(initValue)

		function getCurrentMonthNum() {
			return currentMonthNum
		}
		function incrementMonthNum() {
			if (currentMonthNum < 12 && currentMonthNum >= 1) currentMonthNum++
			else currentMonthNum = 1
		}
		return [getCurrentMonthNum, incrementMonthNum]
	}
	const [getMonth, incMonth] = getMonthNumCounter(1)

	for (let i = 0; i < 15; i++) {
		document.write(`<p class="text">Номер місяця= ${getMonth()}</p>`)
		incMonth()
	}
}