// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 4.
	// Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного
	// тижня(від понеділка 0 год, 0хв, до неділі 23год.59хв)

	function isInCurrentWeek(someDate) {
		let now = new Date()
		const weekDayNum = now.getDay()

		let monday = new Date(now)

		let differenceToMonday
		if (weekDayNum === 0) differenceToMonday = - 6
		else differenceToMonday = 1 - weekDayNum

		monday.setDate(now.getDate() + differenceToMonday)
		monday.setHours(0, 0, 0, 0)

		let sunday = new Date(monday)

		sunday.setDate(monday.getDate() + 6)
		sunday.setHours(23, 59, 59, 999)
		let res
		if (someDate <= sunday && someDate >= monday) res = 'Дата знаходиться в межах поточного тижня'
		else res = 'Дата вийшла за межі поточного тижня'

		return res
	}
	document.write(`<p class="text"> ${isInCurrentWeek(new Date(2025, 4, 20, 10, 30))}</p>`)

}