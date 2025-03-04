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

	function getArrPriceHigherPrev(oldArr) {
		const arrPriceHigherPrev = oldArr.filter((el, i, arr) => i > 0 && el > arr[i - 1] ? el : null)
		return arrPriceHigherPrev
	}
	document.write(`<p class="text">Список цін, які більші за попередню: ${getArrPriceHigherPrev(randArrYearSecurities)}`)

}