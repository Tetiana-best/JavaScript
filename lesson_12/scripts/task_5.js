// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	let arr = ['Maxim', 'Jon', 'Stas', 'Olga']
	document.write(`<p class="text">Початковий масив: ${arr}<br></p>`)

	function getSortArr(array) {

		for (let k = 1; k < array.length; k++) {
			let currentEl = array[k]
			let i = k - 1
			while (i >= 0 && array[i][0] > currentEl[0]) {
				array[i + 1] = array[i]
				i = i - 1
			}
			array[i + 1] = currentEl
		}
		return array
	}
	const sortedArr = getSortArr(arr)
	document.write(`<p class="text">Відсортований масив згідно початкової літери у імені: ${sortedArr}<br></p>`)

	function isOlga(newArr, searchEl) {
		let start = 0
		let end = newArr.length - 1
		while (start <= end) {
			const middle = Math.floor((start + end) / 2)
			if (newArr[middle] === searchEl) return middle
			if (newArr[middle] < searchEl) start = middle + 1
			if (newArr[middle] > searchEl) end = middle - 1
		}
		return -1
	}
	const searchOlga = isOlga(sortedArr, 'Olga')
	if (searchOlga) document.write(`<p class="text"> Ім’я Olga знаходиться під індексом ${searchOlga} у масиві</p>`)
	else throw new Error("Error!Немає імені Olga у масиві");
}