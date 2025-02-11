// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let totalSumProfit = 0
	let countWeek = parseInt(prompt(`Введіть кількість тижнів`))


	for (let numWeek = 1; numWeek <= countWeek; numWeek++) {
		let weekSumProfit = 0
		for (let numDay = 1; numDay <= 7; numDay++) {
			let profitPerDay = parseInt(prompt(`Введіть прибуток за ${numDay} день ${numWeek} тижня`))
			weekSumProfit += profitPerDay
		}
		document.write(`<p class="fintext">Величина прибутку за ${numWeek} тиждень = ${weekSumProfit} грн.</p>`)
		totalSumProfit += weekSumProfit
	}
	document.write(`<p class="fintext"> Загальна величина прибутку = ${totalSumProfit} грн.</p>
	<style>
		.fintext {
		margin-block-end: 10px;
		color: blue;
		font-size: 30px;
		}
		</style>`)

}















