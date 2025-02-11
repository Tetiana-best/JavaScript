// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {
	//0. Виводимо необхідні дані

	//1. Знаходимо результат
	for (let numMonth = 3; numMonth <= 8; numMonth++) {
		document.write(`<p class="text">Місяць № ${numMonth}</p>
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
		</style>`)
	}
	//2. Виводимо результат
}