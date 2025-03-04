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

	function getMaxNum(oldArr) {
		const maxNum = oldArr.reduce((prevMaxNum, el) => (el > prevMaxNum ? el : prevMaxNum), -Infinity)
		return maxNum
	}
	const maxNumArr = getMaxNum(randArrYearSecurities)
	document.write(`<p class="text"> Максимальное значение: ${maxNumArr}</p>`)

	function getPricesPercentOfMax(oldArr, max) {
		const pricesPercentOfMax = oldArr.map((el) => el / max * 100)
		return pricesPercentOfMax
	}
	const arrPricesPercentOfMax = getPricesPercentOfMax(randArrYearSecurities, maxNumArr)
	document.write(`<p class="text">Новий масив цін у відсотках стосовно максимального:  ${arrPricesPercentOfMax.map((el) => el.toFixed(2))}</p >`)

}
