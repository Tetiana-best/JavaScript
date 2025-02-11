// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {
	//0. Виводимо необхідні дані
	let countEven = 0
	let countOdd = 0

	for (let num = 1; num <= 100; num++) {
		const minValue = 1, maxValue = 1000
		let randomNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		if (randomNum % 2 === 0) {
			countEven++
		}
		else {
			countOdd++
		}
	}
	if (countEven > countOdd) {
		document.write(`<h1>Парних ${countEven} більше ніж непарних ${countOdd}.</h1>`)
	}
	else if (countOdd > countEven) {
		document.write(`<h1>Непарних ${countOdd} більше ніж парних ${countEven}.</h1>`)
	}
	else document.write(`<h1>Кількість парних і непарних однакова: ${countEven}.</h1>`)
}