// Строгий режим
"use strict"

// if (confirm('Почати тестування?')) {

let userLengthArray = parseInt(prompt('Введіть кількість елементів (від 0 і більше): '))

if (!isFinite(userLengthArray) || (userLengthArray < 0)) throw new Error('Введена кількість елементів некорректна або менше за 0')

function getUserArray(lengthArray) {
	let userArray = new Array(lengthArray)
	userArray.fill(1, 0, 5)
	userArray.fill(7, 5)
	return userArray
}
document.write(`<p class="text">${getUserArray(userLengthArray)}</p>`)

// }