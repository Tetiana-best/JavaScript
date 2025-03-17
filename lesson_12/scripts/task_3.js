// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arr = [35, 79, 12, 58, 80, 9, 63, 41, 54, 3, 28, 65, 33, 38, 16, 69, 67, 16, 71, 44, 4, 33, 52, 52, 28, 23, 52, 62, 36, 85]

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
		return [array, countComparisons, countChanges]
	}
	const [sortedArr, totalComparisonsInsertSort, totalCountChangesInsertSort] = getCountChangesComparisonsInsertSort([...arr])

	document.write(`<p class="text">Відсортований масив: ${sortedArr}<br>Обмінів: ${totalCountChangesInsertSort}, порівнянь: ${totalComparisonsInsertSort}</p>`)


}