// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arrCarNumber = ['AA8555BH', 'KK5569AM', 'AB7A', 'HA8855FH', 'HM2545HH']
	function getNewArray(oldArray) {
		let newArrCarNumber = []
		oldArray.forEach((element) => {
			if (element[0] === 'A') newArrCarNumber.push(element)
		})
		return newArrCarNumber
	}
	document.write(`<p class="text"> ${getNewArray(arrCarNumber)}</p>`)

}






