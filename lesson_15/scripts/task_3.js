// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Розробити клас MultChecker для перевірки таблиці множення
	// 	Поля
	// 	Число, яке перевіряємо(наприклад, перевірка частини таблиці множення на 7)
	// Кількість правильних відповідей
	// Кількість неправильних відповідей
	// 	Методи
	// Генерування прикладу(метод випадковим чином визначає друге число, перше число фіксоване)
	// Перевірка правильності вказаної відповіді
	// 	render - виведення інформації про тестування на екран

	class MultChecker {
		constructor(firstNum = 7) {
			this.firstNum = firstNum
			this.countOfCorrectAnswers = 0
			this.countOfIncorrectAnswers = 0
		}
		getRandomSecondNum(minNum = 1, maxNum = 9) {
			let randomSecondNumber = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
			return randomSecondNumber
		}
		// Перевірка правильності вказаної відповіді
		chekingCorrectAnswer(userAnswer, randomSecondNum) {
			let correctAnswer = this.firstNum * randomSecondNum
			let res
			if (userAnswer === correctAnswer) {
				res = alert('Молодець!')
				this.countOfCorrectAnswers++
			}
			else {
				res = alert(`Не вірно! Правильна відповідь ${correctAnswer}`)
				this.countOfIncorrectAnswers++
			}
			return res
		}

		// 	Генерування прикладу(метод випадковим чином визначає друге число, перше число фіксоване)
		generateExample() {
			let randomSecondNum = this.getRandomSecondNum()
			let userAnswer = parseInt(prompt(`Скільки буде ${this.firstNum}*${randomSecondNum}?`))
			this.chekingCorrectAnswer(userAnswer, randomSecondNum)
			if (isNaN(userAnswer)) alert('Введіть корректне число')
			if (userAnswer === null) return

		}
		// render - виведення інформації про тестування на екран
		render() {
			let correctAnswers = this.countOfCorrectAnswers
			let incorrectAnswers = this.countOfIncorrectAnswers
			return document.write(`<p class="text">Кількість правильних відповідей: ${correctAnswers},<br>
			Кількість неправильних відповідей: ${incorrectAnswers}</p>`)
		}
	}

	const multChecker1 = new MultChecker()
	multChecker1.generateExample()
	multChecker1.render()

}










