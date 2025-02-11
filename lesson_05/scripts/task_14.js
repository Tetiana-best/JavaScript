// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let sumOdd = 0
	let countNumbers = 0

	let numStartInterval = parseInt(prompt(`Введіть початкове значення діапазону:`))
	let numEndInterval = parseInt(prompt(`Введіть кінцеве значення діапазону:`))
	if (numStartInterval > numEndInterval) {
		let temp = numStartInterval
		numStartInterval = numEndInterval
		numEndInterval = temp
	}
	for (let index = numStartInterval; index <= numEndInterval; index++) {

		if (index % 2 !== 0) {
			countNumbers++
			sumOdd += index
			document.write(`<span class="text">${index} </span>`)
		}
		if (countNumbers === 5) break
	}

	document.write(`<p class="text">Сума непарних 5 чисел у введеному Вами диапозоні: ${sumOdd}.</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 20px;
		}
		</style>`)

}















