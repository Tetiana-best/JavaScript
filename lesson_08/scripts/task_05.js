// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arrPupilsMarks = [5, 2, 5, 3, 4, 5]

	function getCountTwo(ellArray) {
		let countMarksTwo = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i] === 2) countMarksTwo++
		}
		return countMarksTwo
	}
	document.write(`<p class="text">Кількість двійок: ${getCountTwo(arrPupilsMarks)}</p>`)

	function getCountFourAndFive(ellArray) {
		let countFourAndFive = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i] === 5) countFourAndFive++
			if (ellArray[i] === 4) countFourAndFive++
		}
		return countFourAndFive
	}
	document.write(`<p class="text">Кількість хороших оцінок (добре, відмінно): ${getCountFourAndFive(arrPupilsMarks)}</p>`)


	// --------------------------------------------------------
	function getAvgMarks(ellArray) {

		let summ = 0
		for (let i = 0; i < ellArray.length; i++) {
			summ += ellArray[i]
		}
		let avg = summ / ellArray.length
		return avg
	}
	const avgMarks = (getAvgMarks(arrPupilsMarks)).toFixed(2)

	function getCountMarksLessAvg(ellArray) {

		let countMarksLessAvg = 0
		for (let i = 0; i < ellArray.length; i++) {
			if (ellArray[i] < avgMarks) countMarksLessAvg++
		}
		return countMarksLessAvg
	}
	document.write(`<p class="text">Кількість оцінок, які нижче середнього бала ${getAvgMarks(arrPupilsMarks)}: ${getCountMarksLessAvg(arrPupilsMarks)}</p>`)

}