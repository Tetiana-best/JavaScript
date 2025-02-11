// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {
	//0. Виводимо необхідні дані

	//1. Знаходимо результат
	for (let i = 0; i < 8; i++) {
		document.write(`
		<button class="button">Hello</button><br>
		<style>
			.button{
			margin-block-end: 10px;
			border-radius: 5px;
			box-shadow: 5px 5px -2px black;
			color: white;
			background-color: blue;
			padding: 10px 20px;
			letter-spacing: 1.3px;
			font-size: 30px;
		}
		</style>`)
	}
	//2. Виводимо результат
}