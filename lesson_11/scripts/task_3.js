// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {
	let countSingleShips = 5
	let rows = 6
	let columns = 6
	let countOfShells = 10

	function generNullTable(rowsNum, colsNum) {
		let table = []
		for (let rowInd = 0; rowInd < rowsNum; rowInd++) {
			let newRow = new Array(colsNum).fill(0)
			table.push(newRow)
		}
		return table
	}
	const nullTable = generNullTable(rows, columns)

	function generRandomSingleShips(array, countShips, minValRandIndex, maxValRandIndex) {
		let count = 0
		while (count < countShips) {
			let rowRandomIndex = minValRandIndex + Math.floor(Math.random() * (maxValRandIndex - minValRandIndex + 1))
			let columnsRandomIndex = minValRandIndex + Math.floor(Math.random() * (maxValRandIndex - minValRandIndex + 1))
			if (array[rowRandomIndex][columnsRandomIndex] === 0) {
				array[rowRandomIndex][columnsRandomIndex] = 1
				count++
			}
		}
		return array
	}
	let randomSingleShips = generRandomSingleShips(nullTable, countSingleShips, 0, 5)
	console.log(randomSingleShips)

	while (countSingleShips > 0 && countOfShells > 0) {
		let userShotRowNumber = parseInt(prompt(`Введіть номер рядка куди Ви робите постріл від 0 до ${rows - 1}`))
		let userShotColumnNumber = parseInt(prompt(`Введіть номер стовпця куди Ви робите постріл від 0 до ${columns - 1}`))

		if (userShotRowNumber < 0 || userShotRowNumber > rows || userShotColumnNumber < 0 || userShotColumnNumber > columns)
			throw new Error("Erorr")

		if (randomSingleShips[userShotRowNumber][userShotColumnNumber] === 1) {
			alert(`Ви влучили!В Вас залишилось ще ${countSingleShips - 1} кораблів і ${countOfShells - 1} снарядів.`)
			randomSingleShips[userShotRowNumber][userShotColumnNumber] = 0
			countSingleShips--
		}
		else alert(`На жаль не влучили! Спробуйте ще! В Вас залишилось ${countOfShells - 1} снарядів.`)
		countOfShells--
	}
	document.write(`<p class="text">В Вас залишилось ${countSingleShips} кораблів і ${countOfShells} снарядів!`)

}


// let table = new Array(rowsNum).fill(0).map(() => new Array(colsNum).fill(0))










