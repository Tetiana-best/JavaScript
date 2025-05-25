// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3.
	// Визначити скільки залишилось до кінця робочого дня (до 17.00)

	function getTimeLeftInWorkday(endOfWorkingDay) {

		let now = new Date()
		const hours = now.getHours()

		let res
		if (hours <= endOfWorkingDay) {
			let difference = endOfWorkingDay - hours
			res = `До кінця робочого дня залишилось ${difference} год.`
		} else res = 'Робочий день закінчився!'

		return res
	}
	document.write(`<p class="text"> ${getTimeLeftInWorkday(17)}</p>`)


}









