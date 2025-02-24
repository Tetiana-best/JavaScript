// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arrayPupilsNames = ['Марічка', 'Петро', 'Іван', 'Степан', 'Ольга', 'Іван']

	function getCountEqualName(elArray) {
		let countIvan = 0
		for (let i = 0; i < elArray.length; i++) {
			if (elArray[i] === 'Іван')
				countIvan++
		}
		return countIvan
	}
	document.write(`<p class="text">Ім’я «Іван» зустрічається ${getCountEqualName(arrayPupilsNames)} р.</p> `)

}