// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userLengthArray = parseInt(prompt('Введіть кількість елементів масива(від 0 і більше): '))

	if (!isFinite(userLengthArray) || userLengthArray < 0) throw new Error('Введена кількість елементів некорректна або менше за 0');

	function getNewArray(lengthArray, minValueArray, maxValueArray) {
		let userArray = new Array(lengthArray)
		for (let i = 0; i < lengthArray; i++) {
			let randomValueArray = minValueArray + Math.floor(Math.random() * (maxValueArray - minValueArray + 1))
			userArray[i] = randomValueArray
		}
		return userArray
	}
	const randomArray = getNewArray(userLengthArray, 50, 150)

	function getValueMore100(arr) {
		let resArrMore100 = []
		for (const value of arr) {
			if (value > 100) resArrMore100.push(value)
		}
		return resArrMore100
	}
	document.write(`<p class="text">Масив: ${randomArray}.<br> Елементи більше за 100: ${getValueMore100(randomArray)}.</p>`)

}
