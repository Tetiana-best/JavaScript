// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arrProductsPrices = [1000, 20, 31]
	let arrProductsTitles = ['cheese', 'juice', 'bread']

	let totalMoney = parseFloat(prompt(`Введіть скільки грошей Ви маєте`))

	function getWhatBuy(ellArrayPrice, ellArrayTitle) {
		let array = []
		for (let i = 0; i < ellArrayPrice.length; i++) {
			if (totalMoney >= ellArrayPrice[i]) array.push(ellArrayTitle[i])
		}
		return array
	}
	document.write(`<p class="text">Ви можете дозволити собі купити: ${getWhatBuy(arrProductsPrices, arrProductsTitles)}</p>`)

}
