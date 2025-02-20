// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	function sumNumbers(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
		return num1 + num2 + num3 + num4
	}

	function multNumbers(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
		return num1 * num2 * num3 * num4
	}

	function avgNumbers(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
		let resultAvg
		resultAvg = sumNumbers(num1, num2, num3, num4) / 4
		return resultAvg
	}

	function minNumbers(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
		let min, min1, min2
		num1 < num2 ? min1 = num1 : min1 = num2
		num3 < num4 ? min2 = num3 : min2 = num4
		min1 < min2 ? min = min1 : min = min2
		return min
	}
	document.write(`<p class="text">Сума = ${sumNumbers(4, 2, 5, 6)}.<br>
										Добуток = ${multNumbers(4, 2, 5, 6)}.<br>
										Середнє арифметичне = ${avgNumbers(4, 2, 5, 6).toFixed(2)}.<br>
										Мінімальне значення = ${minNumbers(4, 2, 5, 6)}.<br>
										</p>
					<style>
						.text {
						margin-block-end: 10px;
						color: blue;
						font-size: 36px;
						}
					</style>`)

}