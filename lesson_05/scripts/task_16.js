// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let restShells

	let countRows = parseInt(prompt(`Задайте розміри ігрового поля. Введіть кількість рядків:`))
	let countColumns = parseInt(prompt(`Тепер введіть кількість стовпців:`))
	let countShells = Math.ceil(countRows * countColumns / 4)
	alert(`Ви маєте ${countShells} снарядів. Починаємо гру!`)
	const minRowsValue = 1, maxRowsValue = countRows
	let randomRowsPosition = minRowsValue + Math.floor(Math.random() * (maxRowsValue - minRowsValue + 1))
	const minColumnsValue = 1, maxColumnsValue = countColumns
	let randomColumnsPosition = minColumnsValue + Math.floor(Math.random() * (maxColumnsValue - minColumnsValue + 1))

	for (let index = 1; index <= countShells; index++) {
		restShells = countShells - (index)
		let rowShellPosition = parseInt(prompt(`Введіть номер рядка куди Ви будете стріляти(від 1 до ${countRows})`))
		let columnShellPosition = parseInt(prompt(`Введіть номер стовпця куди Ви будете стріляти(від 1 до ${countColumns})`))
		if (rowShellPosition === randomRowsPosition && columnShellPosition === randomColumnsPosition) {
			document.write(`<p class="text">Вітаємо! Ви втопили корабель!</p>
			<style>
				.text {
				margin-block-end: 10px;
				color: blue;
				font-size: 30px;
			}
		</style>`)
			break
		} else {
			alert(`На жаль Ви не влучили. В Вас залишилось ${restShells}`)
		}
		if (restShells === 0) {
			document.write(`<p class="text"> Гра закінчена. Ви використали всі снаряди! (корабель знаходився на позиції: ${randomRowsPosition}:${randomColumnsPosition}.)</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 30px;
		}
		</style>`)
		}
	}

}




















