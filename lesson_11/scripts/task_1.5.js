// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let matrix = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[1, 2, 3, 4],
		[5, 6, 7, 9]
	]

	let sumEvenRow = 0
	for (let row = 0; row < matrix.length; row += 2) {
		for (let column = 0; column < matrix[0].length; column++) {
			sumEvenRow += matrix[row][column]
		}
	}
	document.write(`<p class="text">Сума елементів у парних рядках: ${sumEvenRow}</p>`)

}