// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let numGuessed = 0
	let isNummer = false
	alert(`Загадайте число від 1 до 5.`)

	do {
		const minValue = 1, maxValue = 5
		let nummer = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		if (confirm(`Ваше число ${nummer}?`)) {
			document.write(`<p class="text">ВГАДАВ!</p>
	<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>
		`)
			break

		} else {
			alert(`Спробуйте ще!`)
		}
	} while (isNummer = true);

}















