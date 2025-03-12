// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const profit = [
		[1200, 100, 1100, 1700, 1600, 2000, 1800], // Магазин 1
		[1000, 1400, 1300, 1200, 1500, 2100, 13750], // Магазин 2
		[900, 1300, 1250, 1400, 1350, 1800, 10600]   // Магазин 3
	]

	profit.sort((week1, week2) => week2.reduce((prevSumDay, day) => (prevSumDay + day), 0) - week1.reduce((prevSumDay, day) => (prevSumDay + day), 0))
	console.log(profit)
	document.write(`<p class="text">Решение в консоли</p>`)

}















