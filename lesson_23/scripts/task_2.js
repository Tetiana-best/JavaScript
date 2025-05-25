// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 2.
	// Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.

	function getProcedureDuration(procedureDurationMinutes) {

		let now = new Date()
		now.setHours(14)
		now.setMinutes(45)
		now.setSeconds(0)
		now.setMilliseconds(0)

		let startProcedure = new Date(now)

		let startProcedureMinutes = startProcedure.getMinutes()

		let endProcedure = new Date(startProcedure)
		endProcedure.setMinutes(startProcedureMinutes + procedureDurationMinutes)

		return { startProcedure, endProcedure }
	}
	const procedure = getProcedureDuration(30)

	function isProcedureDuration() {

		let now = new Date()

		if (now >= procedure.startProcedure && now <= procedure.endProcedure) document.write(`Процедура триває`)
		else if (now < procedure.startProcedure) document.write(`<p class="text">Процедура ще не почалась</p>`)
		else document.write(`<p class="text">Процедура вже закінчилась</p>`)
	}

	isProcedureDuration()
}
