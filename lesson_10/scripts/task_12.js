// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	function getArrYearSecurities(lengthArr, minVal, maxVal) {
		let arrYearSecurities = []
		for (let i = 0; i < lengthArr; i++) {
			let randomArrVal = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
			arrYearSecurities.push(randomArrVal)
		}
		return arrYearSecurities
	}
	const randArrYearSecurities = getArrYearSecurities(12, 0, 10000)
	document.write(`<p class="text">Масив цін цінних папер за рік: ${randArrYearSecurities}</p>`)

	function getLastPriceMore1000(oldArr) {
		return oldArr.findLast((el) => el > 1000)
	}
	const lastPriceMore1000 = getLastPriceMore1000(randArrYearSecurities)
	document.write(`<p class="text">Остання ціна більше за 1000: ${lastPriceMore1000}</p>`)
}















