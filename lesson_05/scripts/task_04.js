// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let countNum = parseInt(prompt(`Введіть кількість чисел від 1 до 100:`))
	for (let num = 1; num <= countNum; num++) {
		const minValue = 1, maxValue = 100
		let randomNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		document.write(`<ul><li>${randomNum}</li></ul> `)
	}

}