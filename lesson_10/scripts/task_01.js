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

	function newArrMore1000(oldArr) {
		const more1000 = oldArr.filter((el) => el > 1000)
		return more1000
	}
	document.write(`<p class="text">Новий масив, у якому є тільки ті, що більші за 1000 грн: ${newArrMore1000(randArrYearSecurities)}</p>`)
}




