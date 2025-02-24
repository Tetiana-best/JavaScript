// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arr = [25, 15, 30, 18, 29, 85, 90]

	function lessThan20Buyers(elArray) {
		let res = []
		for (let i = 0; i < elArray.length; i++) {
			if (elArray[i] < 20) res.push(i + 1)
		}
		return res
	}
	document.write(`<p class="text"> Номери днів, коли відвідувачів було менше за 20: ${lessThan20Buyers(arr)}</p>`)

	function minCountBuyers(elemArray) {

		let resMinDay = []
		let minNumBuyers = elemArray[0]
		for (let i = 1; i < elemArray.length; i++) {
			if (elemArray[i] < minNumBuyers) {
				minNumBuyers = elemArray[i]
				resMinDay.push(i + 1)
			}
		}
		return resMinDay
	}
	document.write(`<p class="text"> Номери днів, коли відвідувачів було мінімально: ${minCountBuyers(arr)}</p>`)

	function maxCountBuyers(elemArray) {

		let resMaxDay = []
		let maxNumBuyers = elemArray[0]
		for (let i = 1; i < elemArray.length; i++) {
			if (elemArray[i] > maxNumBuyers) {
				maxNumBuyers = elemArray[i]
				resMaxDay.push(i + 1)
			}
		}
		return resMaxDay
	}
	document.write(`<p class="text"> Номери днів, коли відвідувачів було максимально: ${maxCountBuyers(arr)}</p>`)

	function numBuyersWorkDay(elemArray) {
		let sumBuyersWorkDays = 0
		for (let i = 0; i < 5; i++) {
			sumBuyersWorkDays += elemArray[i]
		}

		return sumBuyersWorkDays
	}
	document.write(`<p class="text"> Загальна кількість клієнтів у робочі дні: ${numBuyersWorkDay(arr)}</p>`)

	function numBuyersWeekend(elemArray) {
		let sumBuyersWeekends = 0
		for (let i = 5; i < 7; i++) {
			sumBuyersWeekends += elemArray[i]
		}

		return sumBuyersWeekends
	}
	document.write(`<p class="text"> Загальна кількість клієнтів на вихідні: ${numBuyersWeekend(arr)}</p>`)

}