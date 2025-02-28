// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arr = [-5, 10, 30, -10, 5]

	function getSumPosEl(array) {
		let sumPosEl = 0
		for (const val of array) {
			if (val > 0) sumPosEl += val
		}
		return sumPosEl
	}
	document.write(`<p class="text">Масив: [${arr}]<br> Добуток додатних елементів: ${getSumPosEl(arr)}.</p>`)

}