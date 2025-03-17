// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arrBubbleSort = [12, 7, 5, 1]

	document.write(`<p class="text">BubbleSort:`)
	function getBubbleSort(array) {

		let change, endIndex = array.length
		do {
			change = false
			for (let i = 1; i < endIndex; i++) {
				if (array[i - 1] > array[i]) {
					const tmp = array[i - 1]
					array[i - 1] = array[i]
					array[i] = tmp
					change = true
					document.write(`<p class="text">[ ${array}]`)
				}
			}
			endIndex--
		} while (change)
		return array
	}
	getBubbleSort(arrBubbleSort)
	document.write(`<p class="text"><br></p>`)

	// ------------------------------------------------------
	const arrCoctailSort = [12, 7, 5, 1]

	document.write(`<p class="text">CoctailSort:`)
	function getCoctailSort(arr) {

		let leftIndex = 0
		let rightIndex = arr.length - 1

		while (leftIndex < rightIndex) {
			let changed = false
			for (let i = leftIndex + 1; i <= rightIndex; i++) {
				if (arr[i - 1] > arr[i]) {
					let temp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = temp
					changed = true
					document.write(`<p class="text">[ ${arr}]`)
				}
			}
			rightIndex--
			if (changed === false) break
			//--
			changed = false
			for (let i = rightIndex; i > leftIndex; i--) {
				if (arr[i - 1] > arr[i]) {
					let temp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = temp
					changed = true
					document.write(`<p class="text">[ ${arr}]`)
				}
			}
			leftIndex++
			if (changed === false) break
		}
		return arr
	}
	getCoctailSort(arrCoctailSort)
	document.write(`<p class="text"><br></p>`)

	// ------------------------------------------------------

	const arrInsertSort = [12, 7, 5, 1]

	document.write(`<p class="text">InsertSort:`)

	function getInsertSort(arrayInsertSort) {

		for (let k = 1; k < arrayInsertSort.length; k++) {
			let currentEl = arrayInsertSort[k]
			let i = k - 1
			while (i >= 0 && arrayInsertSort[i] > currentEl) {
				arrayInsertSort[i + 1] = arrayInsertSort[i]
				i = i - 1
				document.write(`<p class="text">[ ${arrayInsertSort}]`)
			}
			arrayInsertSort[i + 1] = currentEl
		}
		return arrayInsertSort
	}
	getInsertSort(arrInsertSort)

}
