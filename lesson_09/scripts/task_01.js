// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userLengthArray = parseInt(prompt('Введіть кількість елементів:'))

	function getUserArray(lengthArray) {
		let userArray = new Array(lengthArray)
		userArray.fill(0)
		return userArray
	}
	document.write(`<p class="text">${getUserArray(userLengthArray)}</p>`)

}




