// Строгий режим
"use strict"

// if (confirm('Почати тестування?')) {

let matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[1, 2, 3, 4],
	[5, 6, 7, 9]
]
let halfRow = Math.floor(matrix.length / 2)
let halfColumn = Math.floor(matrix[0].length / 2)

let sumEl = 0
for (let row = halfRow; row < matrix.length; row++) {
	for (let column = halfColumn; column < matrix[0].length; column++) {
		sumEl += matrix[row][column]
	}
}
document.write(`<p class="text">Сума елементів у вказаній області: ${sumEl}</p>`)

// }
