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

	function getIndexNumMore1000(oldArr) {

		const indexNumMore1000 = oldArr.reduce((arr, el, ind) => {
			if (el > 1000) arr.push(ind)
			return arr
		}, [])
		return indexNumMore1000
	}
	document.write(`<p class="text">Новий масив, у якому є номери тільки тих, що більші за 1000 грн ${getIndexNumMore1000(randArrYearSecurities)}</p>`)

}