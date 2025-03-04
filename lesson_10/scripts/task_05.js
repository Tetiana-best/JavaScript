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


	function getCountPriceChange(oldArr) {
		const countPriceChange = oldArr.reduce((prevCount, el, i, arr) => ((el - arr[i - 1]) !== 0 ? prevCount + 1 : prevCount), 0)
		return countPriceChange
	}
	document.write(`<p class="text">Кількість змін цін ${getCountPriceChange(randArrYearSecurities)}</p>`)
}