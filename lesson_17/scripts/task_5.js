// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), 
	// AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). 
	// Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
	// Приклад.
	// testsList = [
	//  					{ firstNum: 1, secondNum: 5, opration:’*’, userAnswer: 7, correctAnswer: 5},
	// 					{ firstNum: 3, secondNum: 4, opration:’+’, userAnswer: 7, correctAnswer: 7 },
	// 				]
	// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
	// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач
	// (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.
	// Результати тестування додаються в об’єкт History.
	// Зробити так, щоб об'єкт такого класу можна було створити тільки один. 
	// Коли зроблено ці N задач вивести усю історію на екран.


	class MultChecker {
		constructor() {
			this.firstNum = this.getRandomNumm1()
			this.secondNum = this.getRandomNumm2()
			this.operation = '*'
			this.userAnswer = this.generationExample()
			this.correctAnswer = this.getCorrectAnswer()
		}
		getRandomNumm1(randMinValue = 1, randMaxValue = 10) {
			return randMinValue + Math.floor(Math.random() * (randMaxValue - randMinValue + 1))
		}
		getRandomNumm2(randMinValue = 1, randMaxValue = 10) {
			return randMinValue + Math.floor(Math.random() * (randMaxValue - randMinValue + 1))
		}
		// Метод добутку рандомних чисел
		generationExample() {
			let userAnswer = parseInt(prompt(`Скільки буде ${this.firstNum} ${this.operation} ${this.secondNum}?`))
			if (!Number.isFinite(userAnswer) || userAnswer < 0) throw Error('Ваша відповідь повинна бути числом або не меншою за нуль.')
			return userAnswer
		}
		getCorrectAnswer() {
			return this.firstNum * this.secondNum
		}
		toString() {
			return `<p class="text">${this.firstNum}${this.operation}${this.secondNum}? UserAnswer: ${this.userAnswer}. CorrectAnswer: ${this.correctAnswer} </p >`
		}
	}
	// const MultChecker1 = new MultChecker()
	// document.write(MultChecker1)


	class AddChecker {
		constructor() {
			this.firstNum = this.getRandomNumm1()
			this.secondNum = this.getRandomNumm2()
			this.operation = '+'
			this.userAnswer = this.generationExample()
			this.correctAnswer = this.getCorrectAnswer()
		}
		getRandomNumm1(randMinValue = 1, randMaxValue = 10) {
			return randMinValue + Math.floor(Math.random() * (randMaxValue - randMinValue + 1))
		}
		getRandomNumm2(randMinValue = 1, randMaxValue = 10) {
			return randMinValue + Math.floor(Math.random() * (randMaxValue - randMinValue + 1))
		}
		// Метод добутку рандомних чисел
		generationExample() {
			let userAnswer = parseInt(prompt(`Скільки буде ${this.firstNum} ${this.operation} ${this.secondNum}?`))
			if (!Number.isFinite(userAnswer) || userAnswer < 0) throw Error('Ваша відповідь повинна бути числом або не меншою за нуль.')
			return userAnswer
		}
		getCorrectAnswer() {
			return this.firstNum + this.secondNum
		}
		toString() {
			return `<p class="text">${this.firstNum}${this.operation}${this.secondNum}? UserAnswer: ${this.userAnswer}. CorrectAnswer: ${this.correctAnswer} </p >`
		}
	}
	// const AddChecker1 = new AddChecker()
	// document.write(AddChecker1)

	class History {
		constructor() {
			this.testList = []
		}
		addTest(checker) {
			this.testList.push(checker)
		}
		printHistory() {
			this.testList.forEach((test) => document.write(`${test}`))
		}
	}
	const History1 = new History()

	class TestManager {
		static single

		constructor(totalTests, interval, History1) {
			if (TestManager.single) return TestManager.single
			this.TotalTests = totalTests
			this.Interval = interval
			this.history = History1
			this.count = 0

			TestManager.single = this
		}
		#totalTests
		get TotalTests() {
			return this.#totalTests
		}
		set TotalTests(newTotalTests) {
			if (!Number.isFinite(newTotalTests) || newTotalTests < 0)
				throw new Error(`<p class="text">Кількість тестів повинна бути числом, не може бути порожньою або відємною ! </p>`)
			this.#totalTests = newTotalTests
		}
		#interval
		get Interval() {
			return this.#interval
		}
		set Interval(newInterval) {
			if (!Number.isFinite(newInterval) || newInterval < 0)
				throw new Error(`<p class="text">Інтервал повинен бути числом, не може бути порожнім або відємним ! </p>`)
			this.#interval = newInterval
		}
		getRandomChecker() {
			return (Math.random() < 0.5 ? new AddChecker() : new MultChecker())
		}
		startTesting() {
			const intervalId = setInterval(() => {
				if (this.count >= this.TotalTests) {
					clearInterval(intervalId)
					this.history.printHistory()
					return
				}
				this.history.addTest(this.getRandomChecker())
				this.count++
			}, this.Interval)
		}
	}
	const TestManager1 = new TestManager(4, 2000, History1)
	TestManager1.startTesting()


}