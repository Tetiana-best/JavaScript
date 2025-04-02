// Строгий режим
// "use strict"

if (confirm('Почати тестування?')) {

	// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
	// 		Тир

	// 	Поля(властивості)
	// Масив, у якому зберігається поле з зайцями
	// Методи(дії)
	// Метод пострілу(задається позиція пострілу)
	// Виведення ігрового поля

	const shootingRange = {
		//---- властивості
		// 0 - пусто, 1 - заяц
		fieldWithHares: [
			[0, 1, 0, 0],
			[0, 0, 1, 0],
			[1, 0, 0, 1],
			[0, 0, 0, 0]],

		//---- методи
		// Метод пострілу(задається позиція пострілу)

		getUserShooting(countHares = 4, countShots = 8) {

			let totalCells = this.fieldWithHares.length * this.fieldWithHares[0].length
			if (countHares > totalCells || countShots > totalCells)
				alert(`Кількість зайців ${countHares}, або пострілів ${countShots} перевищує кількість клітинок у полі ${totalCells}`)
			while (countHares > 0 && countShots > 0) {
				let shootingRowIndex = parseFloat(prompt("Введіть номер рядка в який Ви будете стріляти від 1 до 4")) - 1
				let shootingColumnIndex = parseFloat(prompt("Введіть номер стовпця в який Ви будете стріляти від 1 до 4")) - 1
				if (isNaN(shootingRowIndex) || isNaN(shootingColumnIndex) || shootingRowIndex < 0 || shootingRowIndex >= this.fieldWithHares.length ||
					shootingColumnIndex < 0 || shootingColumnIndex >= this.fieldWithHares[0].length) {
					alert("Введений номер ячейки пострілу некорректний.Введіть від 1 до 4");
					continue
				}
				if (this.fieldWithHares[shootingRowIndex][shootingColumnIndex] === 1) {
					countHares--
					alert(`Вітаємо. Ви вбили зайця!Залишилось ще ${countHares} зайців і ${countShots - 1} пострілів`)
					this.fieldWithHares[shootingRowIndex][shootingColumnIndex] = 'x'
				}
				else {
					alert(`Промах. В Вас залишилось ${countShots - 1} пострілів.`)
				}
				countShots--
			};
		},

		// Виведення ігрового поля
		showFieldWithHares() {
			document.write(`<table border = "1" style = "padding: 5px;width:200px;background-color: green;border-radius: 5px;font-size: 36px;" >`)
			for (let row of this.fieldWithHares) {
				document.write("<tr>")
				for (let column of row) {
					let cell
					column === 'x' ? cell = 'X' : cell = column
					document.write(`<td style = "padding: 5px; text-align: center;" > ${cell} </td>`)
				}
				document.write(`</tr>`)
			}
			document.write(`</table>`)
		}
	}
	shootingRange.getUserShooting()
	shootingRange.showFieldWithHares()

}
