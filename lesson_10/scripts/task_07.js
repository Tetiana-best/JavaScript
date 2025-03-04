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

	function isAllPriceMore1000(oldArr) {
		return oldArr.every((el) => el > 1000) ? alert('Усі ціни більше за 1000? Yes') : alert('Усі ціни більше за 1000? No')
	}
	isAllPriceMore1000(randArrYearSecurities)
}


