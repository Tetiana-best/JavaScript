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

	function getCountPriceMore1000(oldArr) {
		return oldArr.reduce((prevCount, el) => el > 1000 ? prevCount + 1 : prevCount, 0)
	}
	const countPriceMore1000 = getCountPriceMore1000(randArrYearSecurities)
	document.write(`<p class="text"> Кількість цін, що більше за 1000: ${countPriceMore1000}</p>`)
}






