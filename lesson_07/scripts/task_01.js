// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userMonthNum = parseInt(prompt(`Введіть номер місяця від 1 до 12, тоді ми скажемо назву цього місяця.`))

	function getMonth(monthNum) {
		let resultMonth
		if (userMonthNum <= 0 || userMonthNum > 12) resultMonth = `Номер введеного Вами місяця ${userMonthNum}.Такого номера місяця не існує.`
		else if (userMonthNum === 1) resultMonth = `Січень.`
		else if (userMonthNum === 2) resultMonth = `Лютий.`
		else if (userMonthNum === 3) resultMonth = `Березень.`
		else if (userMonthNum === 4) resultMonth = `Квітень.`
		else if (userMonthNum === 5) resultMonth = `Травень.`
		else if (userMonthNum === 6) resultMonth = `Червень.`
		else if (userMonthNum === 7) resultMonth = `Липень.`
		else if (userMonthNum === 8) resultMonth = `Серпень.`
		else if (userMonthNum === 9) resultMonth = `Вересень.`
		else if (userMonthNum === 10) resultMonth = `Жовтень.`
		else if (userMonthNum === 11) resultMonth = `Листопад.`
		else resultMonth = `Грудень.`

		return resultMonth
	}
	document.write(`<p class="text">${getMonth()}</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)
}







