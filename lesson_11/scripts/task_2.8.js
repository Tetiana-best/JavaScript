// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	const profit = [
		[1200, 100, 1100, 1700, 1600, 2000, 1800], // Магазин 1
		[1000, 1400, 1300, 1200, 1500, 2100, 1750], // Магазин 2
		[900, 1300, 1250, 1400, 1350, 1800, 1600]   // Магазин 3
	]

	profit.forEach((week) => week.push(Math.max(...week)))
	profit.sort((week1, week2) => week2.at(- 1) - week1.at(- 1))
	profit.forEach((week) => week.pop())

	console.log(profit)
	document.write(`<p class="text">Решение в консоли</p>`)

}















