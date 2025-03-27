// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	const date = {
		day: 26,
		month: 3,
		year: 2020,
	}
	function getYearInCountMonth({ month, year }, countMonth) {
		return (Math.floor(month - 1 + countMonth) / 12) + year
	}
	document.write(`<p class="text">Буде ${getYearInCountMonth((date), 21).toFixed(0)} рік`)
}
