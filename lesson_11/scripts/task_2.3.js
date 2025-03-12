// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const profit = [
		[1200, 1500, 1100, 1700, 1600, 2000, 1800], // Магазин 1
		[1000, 1400, 1300, 1200, 1500, 1900, 1750], // Магазин 2
		[900, 1300, 1250, 1400, 1350, 1800, 1600]   // Магазин 3
	]

	let sumWorkDaysProfit = 0
	for (let shops = 0; shops < profit.length; shops++) {
		for (let days = 0; days < 5; days++) {
			sumWorkDaysProfit += profit[shops][days]
		}
	}
	document.write(`<p class="text">Загальний прибуток усіх магазинів за робочі дні: ${sumWorkDaysProfit} грн.<br></p>`)

}













