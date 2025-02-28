// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	let arrPrices = [100, 20, 2000, 15, 1500]

	arrPrices.forEach((price, i, arr) => {
		if (price > 1000) arr[i] *= 0.7
	}
	)
	document.write(`<p class="text"> ${arrPrices}</p>`)
}


