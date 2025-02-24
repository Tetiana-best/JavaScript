// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arrCarNumber = ['AA8555BH', 'KK5569AM', 'AB7A', 'HA8855FH', 'HM2545HH']

	function getFirstLetter(ellArray) {
		let countFirstLetterA = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i].charAt(0) === 'A') countFirstLetterA++
		}
		return countFirstLetterA
	}
	document.write(`<p class="text">Кількість номерів, які починаються на букву «А»: ${getFirstLetter(arrCarNumber)}</p>`)

	function getFirstLetterEqualLastLetter(ellArray) {
		let countFirstLetterEqualLastLetter = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i].charAt(0) === ellArray[i].charAt(ellArray[i].length - 1)) countFirstLetterEqualLastLetter++
		}
		return countFirstLetterEqualLastLetter
	}
	document.write(`<p class="text">Кількість номерів, в яких перша і остання літери співпадають: ${getFirstLetterEqualLastLetter(arrCarNumber)}</p>`)

	function getMoreFiveChar(ellArray) {
		let countMoreFiveChar = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i].length > 5) countMoreFiveChar++
		}
		return countMoreFiveChar
	}
	document.write(`<p class="text">Кількість номерів, в які складаються з більше ніш 5 символів: ${getMoreFiveChar(arrCarNumber)}</p>`)

}