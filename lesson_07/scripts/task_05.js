// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userCm = parseFloat(prompt(`Введіть кількість см`))
	let userKg = parseFloat(prompt(`Введіть кількість кг`))
	let userKm = parseFloat(prompt(`Введіть кількість км`))
	function convertCmToInch(cm) {
		return userCm * 0.3937
	}
	function convertKgToPound(pound) {
		return userKg * 2.2046
	}
	function convertKmToMiles(miles) {
		return userKm * 0.6214
	}
	document.write(`<p class="text"> ${convertCmToInch().toFixed(1)} дюймів<br>`, ` ${convertKgToPound().toFixed(1)} фунтів<br>`, ` ${convertKmToMiles().toFixed(1)} миль</p>
<style>
						.text {
						margin-block-end: 10px;
						color: blue;
						font-size: 36px;
						}
					</style>`)

}