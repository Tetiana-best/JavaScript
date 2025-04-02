// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Створити об’єкт «Авто».
	// 	Авто

	// 	Поля(властивості)
	// 	Марка
	// Розмір бака
	// Кількість наявних літрів
	// Кількість місць
	// Кількість пасажирів
	// 	Методи(дії)
	// Заправка на вказану кількість літрів
	// Виведення кількості пасажирів
	// Додавання пасажирів
	// Висадка пасажирів

	const car = {
		//---- властивості
		model: 'Toyota',
		tankSize: 50,
		countAvailableLiters: 20,
		countOfSeats: 5,
		countOfPassengers: 3,

		//---- методи

		//Заправка на вказану кількість літрів
		filingAmountOfLiters(liters) {
			let restAvailableLiters = this.tankSize - this.countAvailableLiters
			if (liters < restAvailableLiters)
				this.countAvailableLiters += liters
			else throw new Error("Error. There is not enough space in the tank!");
		},

		//Виведення кількості пасажирів
		showCountOfPassengers() {
			document.write(`<p class="text">Кількість пасажирів ${this.countOfPassengers}</p>`)
		},

		//Додавання пасажирів
		addCountOfPassengers(newPassengers) {
			let restCountOfSeats = this.countOfSeats - this.countOfPassengers
			if (newPassengers <= restCountOfSeats)
				this.countOfPassengers += newPassengers
			else throw new Error("Error. There is not enough seats in car!");
		},

		//Висадка пасажирів
		disembarkingPassengers(contExitingPassengers) {
			if (contExitingPassengers <= this.countOfPassengers)
				this.countOfPassengers -= contExitingPassengers
			else throw new Error("Error. You want to disembark more passengers than there are in the car!");
		},
		// toString() {
		// 	return `Заправка на вказану кількість літрів${this.filingAmountOfLiters}`
		// },

	}
	car.filingAmountOfLiters(10)
	car.showCountOfPassengers()
	// car.addCountOfPassengers(2)
	// car.disembarkingPassengers(4)
	// document.write
}
