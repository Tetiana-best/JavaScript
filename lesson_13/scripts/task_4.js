// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let boys = ['Maxim', 'Ivan', 'Jon'];
	let girls = ['Olga', 'Tetyana', 'Miia'];

	function getPairs(boysArr, girlsArr, pairsArr) {

		if (boysArr.length === 0 || girlsArr.length === 0) document.write(`${pairsArr.join('')}<br>`)

		for (let girlIndex = 0; girlIndex < girlsArr.length; girlIndex++) {
			let currentPair = `${boysArr[0]}+${girlsArr[girlIndex]}<br>`

			let restBoysArr = boysArr.filter((elBoy, currentBoyIndex) => currentBoyIndex !== 0)
			let restGirlsArr = girlsArr.filter((elGirl, currentGirlIndex) => currentGirlIndex !== girlIndex)

			getPairs(restBoysArr, restGirlsArr, [...pairsArr, currentPair])
		}
	}
	getPairs(boys, girls, [])

}
