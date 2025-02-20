// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userDayWeekNum = parseInt(prompt(`Введіть номер дня тижня від 1 до 7, тоді ми повідомимо Вам чи це робочий день`))

	function isDayWeekWork(dayWeekNum) {
		return userDayWeekNum >= 1 && userDayWeekNum <= 5
	}
	if (isDayWeekWork(userDayWeekNum)) document.write(`<p class="text">Робочий день</p>
	<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)
	else if (userDayWeekNum <= 0 || userDayWeekNum > 7) document.write(`<p class="text">Такого номера дня тижня не існує.</p>
	<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)
	else document.write(`<p class="text">Вихідний</p>
	<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)
}