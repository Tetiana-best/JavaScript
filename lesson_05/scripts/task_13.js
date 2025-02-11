// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let sumOdd = 0

	let numStartInterval = parseInt(prompt(`Введіть початкове значення діапазону:`))
	let numEndInterval = parseInt(prompt(`Введіть кінцеве значення діапазону:`))
	if (numStartInterval > numEndInterval) {
		let temp = numStartInterval
		numStartInterval = numEndInterval
		numEndInterval = temp
	}
	for (let index = numStartInterval; index <= numEndInterval; index++) {

		if (index % 2 !== 0) {
			sumOdd += index
			document.write(`<span class="text">${index} </span>`)
		}
	}
	document.write(`<p class="text">Сума непарних чисел у введеному Вами диапозоні: ${sumOdd}.</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 20px;
		}
		</style>`)

}













