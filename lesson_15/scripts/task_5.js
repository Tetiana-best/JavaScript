// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Розробити клас «Керівник танців»
	// Поля
	// Масив імен хлопців
	// Масив імен дівчат
	// Методи
	// Метод випадкового вибору імені хлопця
	// Метод випадкового вибору імені дівчини
	// Метод виведення пари для танців
	// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців


	const initialBoysList = ['Ben', 'Mark', 'John']
	const initialGirlsList = ['Olga', 'Anna', 'Miia']

	class DanceDirector {
		constructor(initialBoysList, initialGirlsList, initialInterval) {
			this.boysList = initialBoysList
			this.girlsList = initialGirlsList
			this.interval = initialInterval
		}
		// Метод випадкового вибору імені хлопця
		getRandomBoysName() {
			let randomIndexBoysName = Math.floor(Math.random() * this.boysList.length)
			return this.boysList[randomIndexBoysName]
		}
		// Метод випадкового вибору імені дівчини
		getRandomGirlsName() {
			let randomIndexGirlsName = Math.floor(Math.random() * this.girlsList.length)
			return this.girlsList[randomIndexGirlsName]
		}
		// Метод виведення пари для танців
		toString() {
			let boy = this.getRandomBoysName()
			let girl = this.getRandomGirlsName()
			return document.write(`<p class="text">${boy} танцює з ${girl}</p>`)
		}
		// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців

		run() {
			return setInterval(() => {
				this.toString()
			}, this.interval);
		}
	}
	const danceDirector1 = new DanceDirector(initialBoysList, initialGirlsList, 5000)
	danceDirector1.run()


}