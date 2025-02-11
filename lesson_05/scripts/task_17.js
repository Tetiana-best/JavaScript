// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const minValue = 100, maxValue = 1000
	let productPrice = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	let userSum = parseFloat(prompt(`Товар коштує ${productPrice}. Внесіть суму грошей яка в Вас є.`))

	while (userSum < productPrice) {
		let deltaSum = productPrice - userSum
		let additionalSum = parseFloat(prompt(`Дякуємо! На жаль цієї суми недостатньо, внесіть ще ${deltaSum}.`))
		userSum += additionalSum
	}
	alert(`Дякуємо за покупку! Приходьте ще!`)

}





















