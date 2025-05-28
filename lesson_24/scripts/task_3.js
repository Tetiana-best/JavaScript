// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3.
	// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.


	class RandomEvenNumber {
		constructor(maxCountEven = 5) {
			this.maxCountEven = maxCountEven
		}
		*randomEvenNumber(minValue = 1, maxValue = 20) {
			let count = 0
			while (count < this.maxCountEven) {
				let randomValue = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
				if (randomValue % 2 === 0) {
					yield randomValue
					count++
				}
			}
		}
	}
	const randEvenGenerator = new RandomEvenNumber(5)
	for (const num of randEvenGenerator.randomEvenNumber(1, 20)) {
		document.write(`<p class="text">${num}</p>`)
	}

}
































// class RandomNumberWithStep {
// 	constructor(initStartLimit = 1, limitStep = 10, maxNumbersCount = 5) {
// 		this.initStartLimit = initStartLimit
// 		this.limitStep = limitStep
// 		this.maxNumbersCount = maxNumbersCount
// 	}
// 	[Symbol.iterator]() {
// 		this.numbersCount = 0
// 		this.startLimit = this.initStartLimit
// 		return this
// 	}
// 	next() {
// 		if (this.numbersCount < this.maxNumbersCount) {
// 			const randNum =
// 				this.startLimit + Math.floor(Math.random() * (this.limitStep + 1))
// 			this.startLimit = randNum
// 			this.numbersCount++
// 			return { done: false, value: randNum }
// 		} else return { done: true }
// 	}
// }
// const randGenerator = new RandomNumberWithStep()
// for (const num of randGenerator) {
// 	document.write(`${num}<br>`)
// }
// }









