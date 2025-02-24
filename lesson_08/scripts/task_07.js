// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const arrUtilityBillsForYear = [200, 250, 270.55, 333, 200.50, 100, 200, 350, 870.55, 533, 50, 150]

	let sumYearMoney = 0
	for (let i = 0; i < arrUtilityBillsForYear.length; i++) {
		sumYearMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">1. Сумарна кількість грошей за весь рік: ${(sumYearMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumFirstHalfYearMoney = 0
	let countFirstSexMonth = arrUtilityBillsForYear.length / 2
	for (let i = 0; i < countFirstSexMonth; i++) {
		sumFirstHalfYearMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">2. Сумарна кількість грошей у першій половині року: ${(sumFirstHalfYearMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumSecondHalfYearMoney = 0
	const countSexMonth = Math.floor(arrUtilityBillsForYear.length / 2)
	for (let i = countSexMonth; i < arrUtilityBillsForYear.length; i++) {
		sumSecondHalfYearMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">3. Сумарна кількість грошей у другій половині року: ${(sumSecondHalfYearMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumSummerMoney = 0
	for (let i = 5; i < 8; i++) {
		sumSummerMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">4. Сумарна кількість грошей за літо: ${(sumSummerMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumSecondQuarterMoney = 0
	for (let i = 3; i < 6; i++) {
		sumSecondQuarterMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">5. Сумарна кількість грошей за ІІ квартал: ${(sumSecondQuarterMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumEvenMonthMoney = 0
	for (let i = 0; i < arrUtilityBillsForYear.length; i += 2) {
		sumEvenMonthMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">6. Сумарна кількість грошей за парні місяці: ${(sumEvenMonthMoney).toFixed(2)} грн</p>`)

	// ------------------------

	let sumFirstMonthSeasonMoney = 0
	for (let i = 0; i < arrUtilityBillsForYear.length; i += 3) {
		sumFirstMonthSeasonMoney += arrUtilityBillsForYear[i]
	}
	document.write(`<p class="text">7. Сумарна кількість грошей за місяці, які є початковими у сезоні: ${(sumFirstMonthSeasonMoney).toFixed(2)} грн</p>`)

}


