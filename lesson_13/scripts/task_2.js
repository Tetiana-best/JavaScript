// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	function getStartQuiz(minValue, maxValue, intervalTime) {
		setInterval(() => {
			let randomValue1 = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			let randomValue2 = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			let userAnswer = parseInt(prompt(`Скільки буде ${randomValue1}+${randomValue2}?`))
			let sum = randomValue1 + randomValue2
			if (sum === userAnswer) alert('Молодець!')
			else alert('Не вірно!')
		}, intervalTime);
	}
	getStartQuiz(1, 9, 10000)

}
