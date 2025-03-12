// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	let matrix = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[1, 2, 3, 4],
		[5, 6, 7, 8]
	]
	let halfRow = Math.floor(matrix.length / 2)
	let halfColumn = Math.floor(matrix[0].length / 2)

	let sumEl = 0
	for (let row = 0; row < halfRow; row++) {
		for (let column = 0; column < halfColumn; column++) {
			sumEl += matrix[row][column]
		}
	}
	document.write(`<p class="text">Сума елементів у вказаній області: ${sumEl}</p>`)

}




