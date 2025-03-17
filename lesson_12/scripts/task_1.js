// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arr = [35, 79, 12, 58, 80, 9, 63, 41, 54, 3, 28, 65, 33, 38, 16, 69, 67, 16, 71, 44, 4, 33, 52, 52, 28, 23, 52, 62, 36, 85]

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
		return [array, countChanges, countComparisons]
	}
	const [sortedArr, countChangesBubbleSort, countComparisonsBubbleSort] = getCountChangesComparisonsBubbleSort([...arr])
	document.write(`<p class="text">Відсортований масив: ${sortedArr}<br>Обмінів: ${countChangesBubbleSort}, порівнянь: ${countComparisonsBubbleSort}</p>`)

}
