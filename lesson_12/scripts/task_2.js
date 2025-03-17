// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arr = [35, 79, 12, 58, 80, 9, 63, 41, 54, 3, 28, 65, 33, 38, 16, 69, 67, 16, 71, 44, 4, 33, 52, 52, 28, 23, 52, 62, 36, 85]

	function getCountChangesComparisonsCoctailSort(array) {

		let leftIndex = 0
		let rightIndex = arr.length - 1
		let countChangesToRight = 0, countComparisonsToRight = 0
		let countChangesToLeft = 0, countComparisonsToLeft = 0

		while (leftIndex < rightIndex) {
			let changed = false
			for (let i = leftIndex + 1; i <= rightIndex; i++) {
				countComparisonsToRight++
				if (array[i - 1] > array[i]) {
					let temp = array[i - 1]
					array[i - 1] = array[i]
					array[i] = temp
					changed = true
					countChangesToRight++
				}
			}
			rightIndex--
			if (changed === false) break
			//---- проходимось справа-наліво
			changed = false
			for (let i = rightIndex; i > leftIndex; i--) {
				countComparisonsToLeft++
				if (array[i - 1] > array[i]) {
					let temp = array[i - 1]
					array[i - 1] = array[i]
					array[i] = temp
					changed = true
					countChangesToLeft++
				}
			}
			leftIndex++
			if (changed === false) break
		}
		let totalCountChanges = countChangesToRight + countChangesToLeft
		let totalComparisons = countComparisonsToRight + countComparisonsToLeft
		return [array, totalCountChanges, totalComparisons]

	}
	const [sortedArr, totalCountChangesCoctailSort, totalComparisonsCoctailSort] = getCountChangesComparisonsCoctailSort([...arr])

	document.write(`<p class="text">Відсортований масив: ${sortedArr}<br>Обмінів: ${totalCountChangesCoctailSort}, порівнянь: ${totalComparisonsCoctailSort}</p>`)

}
