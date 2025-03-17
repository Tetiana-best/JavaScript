// Строгий режим
"use strict"

// if (confirm('Почати тестування?')) {

let arr = ['Maxim', 'Jon', 'Stas', 'Olga']
document.write(`<p class="text">Початковий масив: ${arr}<br></p>`)

function getSortArr(array) {

	for (let k = 1; k < array.length; k++) {
		let currentEl = array[k]
		let i = k - 1
		while (i >= 0 && array[i].length > currentEl.length) {
			array[i + 1] = array[i]
			i = i - 1
		}
		array[i + 1] = currentEl
	}
	return array
}
const sortedArr = getSortArr(arr)
document.write(`<p class="text">Відсортований за кількістю символів в слові масив: ${sortedArr}<br></p>`)

function isWordFiveSymbol(newArr, searchEl, ind) {
	let start = 0
	let end = newArr.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (newArr[middle].length === searchEl) return middle
		if (newArr[middle].length < searchEl) start = middle + 1
		if (newArr[middle].length > searchEl) end = middle - 1
	}
	return -1
}
const wordLength = 5
const searchWordFiveSymbol = isWordFiveSymbol(sortedArr, wordLength)

if (searchWordFiveSymbol) document.write(`<p class="text"> Слово з 5 символів знаходиться під індексом ${searchWordFiveSymbol}</p>`)
else throw new Error("Error!Немає імені з 5 символів");

// }
