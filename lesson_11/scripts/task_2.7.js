// Строгий режим
"use strict"

// if (confirm('Почати тестування?')) {

const profit = [
	[1200, 100, 1100, 1700, 1600, 2000, 1800], // Магазин 1
	[1000, 1400, 1300, 1200, 1500, 1900, 1750], // Магазин 2
	[900, 1300, 1250, 1400, 1350, 1800, 1600]   // Магазин 3
]

for (const weeks of profit) {
	weeks.sort((day1, day2) => day1 - day2)
	document.write(`<p class="text"> ${weeks}<br></p>`)
}

// }















