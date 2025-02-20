// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let userMonthNum = parseInt(prompt(`Введіть номер місяця від 1 до 12, тоді ми скажемо яка це пора року`))
	function getSeason(monthNum) {

		let resultSeason
		if (userMonthNum <= 0 || userMonthNum > 12) resultSeason = `Номер введеного Вами місяця ${userMonthNum}.Такого номера місяця не існує.`
		else if (userMonthNum <= 2 || userMonthNum === 12) resultSeason = `Номер введеного Вами місяця ${userMonthNum}, а це зима.`
		else if (userMonthNum <= 5) resultSeason = `Номер введеного Вами місяця ${userMonthNum}, а це весна.`
		else if (userMonthNum <= 8) resultSeason = `Номер введеного Вами місяця ${userMonthNum}, а це літо.`
		else resultSeason = `Номер введеного Вами місяця ${userMonthNum}, а це осінь.`

		return resultSeason
	}
	document.write(`<p class="text">${getSeason()}</p>
		<style>
		.text {
		margin-block-end: 10px;
		color: blue;
		font-size: 36px;
		}
		</style>`)
}











