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

	function isSomePriceLess1000(oldArr) {
		const somePriceLess1000 = oldArr.some((el) => el < 1000) ? alert('Чи є ціна, що менше 1000? Yes') : alert('Чи є ціна, що менше 1000? No')
		return somePriceLess1000
	}
	isSomePriceLess1000(randArrYearSecurities)

}
