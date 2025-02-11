// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let numGuessed = 0
	let isNummer = false
	alert(`Загадайте число від 1 до 5. Компьютер має 3 спроби, щоб вгадати!`)
	for (let countAttempts = 1; countAttempts <= 3; countAttempts++) {
		const minValue = 1, maxValue = 5
		let nummer = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		if (confirm(`Ваше число ${nummer}?`)) {
			alert(`Вітаємо!`)
			numGuessed++
			isNummer = true
			break
		} else {
			alert(`Спробуйте ще!`)
		}
	}
	document.write(`<p class="text">Кількість вгаданих: ${numGuessed}</p>
	<style>
		.text {
		margin-block-end: 10px;
		// border-radius: 5px;
		// box-shadow: 5px 5px -2px black;
		color: blue;
		// background-color: blue;
		// padding: 10px 20px;
		// letter-spacing: 1.3px;
		font-size: 30px;
		}
		</style>
		`)

}















