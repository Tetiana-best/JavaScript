// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userCountFieldCell = parseInt(prompt(`Введіть кількість клітинок поля для гри(від 0 до ...)`))
	let userCountSingleShips = parseInt(prompt(`Введіть кількість одиночних кораблів`))

	function getArrNull(CountFieldCell) {
		let arr = []
		for (let index = 0; index < CountFieldCell; index++) {
			arr.push(0)
		}
		return arr
	}

	const arrNull = getArrNull(userCountFieldCell)

	function randomSingleShips(array, countShips) {
		const minValue = 0, maxValue = array.length - 1
		let count = 0
		while (count < countShips) {
			let randomIndex = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			if (array[randomIndex] === 0) {
				array[randomIndex] = 1
				count++
			}
		}
		return array
	}

	let newArray = randomSingleShips(arrNull, userCountSingleShips)

	while (userCountSingleShips > 0) {
		let userShotCellNumber = parseInt(prompt(`Введіть номер клітинки куди Ви робите постріл від 0 до ${userCountFieldCell - 1}`))
		if (newArray[userShotCellNumber] === 1) {
			alert(`Ви влучили!В Вас залишилось ще ${userCountSingleShips - 1} кораблів.`)
			newArray[userShotCellNumber] = 0
			userCountSingleShips--
		}
		else alert(`На жаль не влучили! Спробуйте ще!`)
	}
	document.write(`<p class="text"> Вітаємо!`)

}









