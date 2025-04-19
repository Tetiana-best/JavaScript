// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Створити службове авто (водій, марка, номер).
	// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.


	class CompanyCar {
		static oneCopy
		constructor(driver, brand, nummber) {
			if (CompanyCar.oneCopy) return CompanyCar.oneCopy
			this.driver = driver
			this.brand = brand
			this.nummber = nummber
			CompanyCar.oneCopy = this
		}
		toString() {
			return `<p class="text">Данні службового авто : водій ${CompanyCar.oneCopy.driver}, марка  ${CompanyCar.oneCopy.brand}, номер  ${CompanyCar.oneCopy.nummber} </p >`
		}
	}
	const companyCar1 = new CompanyCar('Ivan', 'Hyindai', 'KE 5555')
	document.write(companyCar1)

	const companyCar2 = new CompanyCar('Petro', 'BMW', 'TA 6666')
	document.write(companyCar2)

}
