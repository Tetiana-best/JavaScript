// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let matrix = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[1, 2, 3, 4],
		[5, 6, 7, 9]
	]

	let sumEvenRowOddColumn = 0
	for (let row = 0; row < matrix.length; row += 2) {
		for (let column = 1; column < matrix[0].length; column += 2) {
			sumEvenRowOddColumn += matrix[row][column]
		}
	}

	let sumOddRowEvenColumn = 0
	for (let row = 1; row < matrix.length; row += 2) {
		for (let column = 0; column < matrix[0].length; column += 2) {
			sumOddRowEvenColumn += matrix[row][column]
		}
	}
	let totalSum = sumEvenRowOddColumn + sumOddRowEvenColumn
	document.write(`<p class="text">Сума елементів у парних рядках – непарні стовпці, у непарних – парні.: ${totalSum}</p>`)

}


