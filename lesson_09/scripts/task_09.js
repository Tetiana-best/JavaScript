// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let oldArrName = ['Letti', 'Olga', 'Vadim', 'Elsa']

	function getnewArrNameFirstLetter(arr) {
		const newArrNameFirstLetter = arr.map((element) => element[0])
		return newArrNameFirstLetter
	}
	document.write(`<p class="text"> ${getnewArrNameFirstLetter(oldArrName)}</p>`)

}









