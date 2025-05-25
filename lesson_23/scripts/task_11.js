// Строгий режим
"use strict"

// if (confirm('Почати тестування?')) {

// Завдання 11. 
// Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування
// бульбашкою і вставкою.

function getRandomArray(minValue, maxValue, countEl) {

	let arr = []
	for (let i = 0; i < countEl; i++) {
		let randomValue = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		arr.push(randomValue);
	}
	return arr
}
const originalRandArr = getRandomArray(1, 800, 1000)
const randArr1 = [...originalRandArr]
const randArr2 = [...originalRandArr]

function getCountChangesComparisonsBubbleSort(array) {

	let change, endIndex = array.length
	let countChanges = 0, countComparisons = 0
	do {
		change = false
		for (let i = 1; i < endIndex; i++) {
			countComparisons++
			if (array[i - 1] > array[i]) {
				const tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
				change = true
				countChanges++
			}
		}
		endIndex--
	} while (change)
	return array
}

function getCountChangesComparisonsInsertSort(array) {

	let countChanges = 0, countComparisons = 0

	for (let k = 1; k < array.length; k++) {
		let currentEl = array[k]
		let i = k - 1
		countComparisons++
		while (i >= 0 && array[i] > currentEl) {
			array[i + 1] = array[i]
			i = i - 1
			countComparisons++
			countChanges++
		}
		array[i + 1] = currentEl
	}
	return array
}

function compareSortingTimes() {
	const spanEl = document.createElement('span')
	spanEl.className = 'text'
	document.body.append(spanEl)

	let startBubbleSort = new Date()

	getCountChangesComparisonsBubbleSort(randArr1)

	let finishBubbleSort = new Date()
	let resBubbleSortMs = finishBubbleSort - startBubbleSort

	let startInsertSort = new Date()

	getCountChangesComparisonsInsertSort(randArr2)

	let finishInsertSort = new Date()
	let resInsertSortMs = finishInsertSort - startInsertSort

	let res
	let diff = Math.abs(resBubbleSortMs - resInsertSortMs)
	if (resBubbleSortMs > resInsertSortMs) res = `Сортування бульбашкою швидше на ${diff} мс. ніж сортування вставкою `
	else if (resBubbleSortMs < resInsertSortMs) res = `Сортування вставкою швидше на ${diff} мс. ніж сортування бульбашкою `
	else res = `Сортування виконалось за однаковий час ${resBubbleSortMs} мс.`
	spanEl.textContent = res
	return res
}

compareSortingTimes()


// }

