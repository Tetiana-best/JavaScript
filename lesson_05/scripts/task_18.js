// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let averageYearTemperature = 0
	let sumYearTemperature = 0
	const numDayYear = 365
	for (let i = 1; i <= numDayYear; i++) {
		const minValue = -40, maxValue = 40
		let randomTempDay = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		sumYearTemperature += randomTempDay

	}
	averageYearTemperature = parseFloat(sumYearTemperature / numDayYear).toFixed(1)
	document.write(`<p class="text">Середня температура за рік: ${averageYearTemperature} град.</p>
	<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 30px;
		}
		</style>`)

}















