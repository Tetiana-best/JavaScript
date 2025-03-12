// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let matrix = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[1, 2, 3, 4],
		[5, 6, 7, 9]
	]

	let sumOddColumn = 0
	for (let row = 0; row < matrix.length; row++) {
		for (let column = 1; column < matrix[0].length; column += 2) {
			sumOddColumn += matrix[row][column]
		}
	}
	document.write(`<p class="text">Сума елементів у непарних стовпцях: ${sumOddColumn}</p>`)

}
