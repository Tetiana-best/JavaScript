// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const marks = [5, 2, 5, 4, 4, 5]

	function getAvgMarks(array) {
		let sum = 0

		for (let i = 0; i < array.length; i++) {
			sum += array[i]
		}
		return sum / array.length
	}
	const average = getAvgMarks(marks)

	document.write(`<p class="text">Середня оцінка учня: ${average.toFixed(1)}</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)

	function getMarksCategories(arrayMarks) {
		let test1 = false
		let test2 = false
		for (let i = 0; i < arrayMarks.length; i++) {
			if (arrayMarks[i] === 3) test1 = true
			if (arrayMarks[i] === 2) test2 = true
		}
		let res
		if (test1) res = `Трійочник`
		else if (test2) res = `Двійочник`
		else if (average === 5) res = `Відмінник`
		else if (average >= 4 && average < 5 && !test1) res = `Хорошист`
		else res = `Такої оцінки немає`

		return res
	}
	const markCategories = getMarksCategories(marks)
	document.write(`<p class="text"> ${markCategories}</p>
		<style>
			.text {
			margin-block-end: 10px;
			color: blue;
			font-size: 36px;
			}
		</style>`)

}




