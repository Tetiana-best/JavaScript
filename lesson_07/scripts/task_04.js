// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	function calc(num1, num2, num3) {
		let evenCount = 0
		if (num1 % 2 === 0) evenCount++
		if (num2 % 2 === 0) evenCount++
		if (num3 % 2 === 0) evenCount++

		let positivNumCount = 0
		if (num1 > 0) positivNumCount++
		if (num2 > 0) positivNumCount++
		if (num3 > 0) positivNumCount++

		let more100NumCount = 0
		if (num1 > 100) more100NumCount++
		if (num2 > 100) more100NumCount++
		if (num3 > 100) more100NumCount++
		return `Кількість парних: ${evenCount}<br> Кількість додатніх: ${positivNumCount}<br> Кількість за 100: ${more100NumCount}`
	}

	document.write(`<p class="text">${calc(4, -200, 105)}</p>
					<style>
						.text {
						margin-block-end: 10px;
						color: blue;
						font-size: 36px;
						}
					</style>`)

}