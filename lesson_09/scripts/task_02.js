// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userLengthArray = parseInt(prompt('Введіть кількість елементів (від 0 і більше): '))

	if (!isFinite(userLengthArray) || (userLengthArray < 0)) throw new Error('Введена кількість елементів некорректна або менше за 0')

	function getUserArray(lengthArray) {
		let userArray = new Array(lengthArray)
		let halfArray = Math.floor(lengthArray / 2)
		userArray.fill(1, 0, halfArray)
		userArray.fill(7, halfArray, lengthArray)
		return userArray
	}
	document.write(`<p class="text">${getUserArray(userLengthArray)}</p>`)

}