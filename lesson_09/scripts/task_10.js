// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let oldArrPriceGrn = [500, 300, 400, 400]

	function getTax20Percent(arr) {
		let newArrPriceGrn = arr.map((price) => price * 0.2)
		return newArrPriceGrn
	}

	document.write(`<p class="text"> ${getTax20Percent(oldArrPriceGrn)}</p>`)
}















