// Строгий режим
// "use strict"
if (confirm('Почати тестування?')) {

	// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості
	//  від’ємних, кількість входжень деякого числа (статичні методи)

	class ArrayOperations {

		// знаходження кількості додатних
		static getCountPositiveNumbers(array) {
			return array.reduce((prevCount, el) => el > 0 ? prevCount + 1 : prevCount, 0)
		}
		// знаходження кількості від’ємних
		static getCountNegativeNumbers(array) {
			return array.reduce((prevCount, el) => el < 0 ? prevCount + 1 : prevCount, 0)
		}
		// кількість входжень деякого числа
		static getCountSomeNumber(someNumber) {
			return array.reduce((prevCount, el) => el === someNumber ? prevCount + 1 : prevCount, 0)
		}
	}
	//------------
	const array = [15, -20, 40, 60, -100, 45, -20]
	document.write(`<p class="text">Кількість додатних: ${ArrayOperations.getCountPositiveNumbers(array)} </p >`)
	document.write(`<p class="text">Кількість від’ємних: ${ArrayOperations.getCountNegativeNumbers(array)} </p >`)

	const someNumber = -20
	document.write(`<p class="text">Кількість входжень деякого числа(наприклад ${someNumber}): ${ArrayOperations.getCountSomeNumber(someNumber)} </p > `)

}
