// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. 
	// Користувач задає місяць навчання учня(перевіряти чи є числом, чи від 1 до 12, чи не канікули)
	// та оцінку(перевіряти чи
	// є числом, чи від 1 до 100).Вивести чи зможе він виправити оцінку(якщо оцінка погана і це не
	// останній місяць у семестрі).Обробку усіх помилок зробити з використанням відповідних класів.


	//---- у випадку значення не є числом ----
	class IsNotNumberError extends Error {
		constructor() {
			super()
			this.message = 'Має бути числом'
			this.name = 'IsNotNumberError'
		}
	}
	//--- У випадку значення є від"ємним ---
	class IsNegativeNumberError extends Error {
		constructor() {
			super()
			this.message = "Не може бути від'ємним"
			this.name = 'IsNegativeNumberError'
		}
	}
	//--- У випадку число є дуже великим ---
	class IsTooHighNumberOfMonthError extends Error {
		constructor(currentNumber) {
			super()
			this.message = `Не може бути більшим за 12. Ведено: ${currentNumber}`
			this.name = 'IsTooHighNumberOfMonthError'
		}
	}
	//--- У випадку число є дуже великим ---
	class IsTooHighNumberOfGradesError extends Error {
		constructor(currentNumber) {
			super()
			this.message = `Не може бути більшим за 100. Ведено: ${currentNumber}`
			this.name = 'IsTooHighNumberOfGradesError'
		}
	}
	class IsHolidayNumberOfMonthError extends Error {
		constructor(currentNumber) {
			super()
			this.message = `Місяць ${currentNumber} відноситися до канікул.`
			this.name = 'IsHolidayNumberOfMonthError'
		}
	}
	class IsGradeCorrectionAllowed extends Error {
		constructor(currentNumber) {
			super()
			this.message = `Ваша оцінка ${currentNumber} погана, але Ви ще маєте час її виправити.`
			this.name = 'IsGradeCorrectionAllowedError'
		}
	}

	//----------------------
	function validate() {
		try {
			const studyMonth = parseInt(prompt("Введіть місяць навчання учня(1-12): "))
			const studentGrade = parseInt(prompt("Введіть оцінку учня (1-100): "))
			if (isNaN(studyMonth) || isNaN(studentGrade)) throw new IsNotNumberError()
			if (studyMonth < 0 || studentGrade < 0) throw new IsNegativeNumberError()
			if (studyMonth >= 6 && studentGrade <= 8) throw new IsHolidayNumberOfMonthError(studyMonth)
			if (studyMonth > 12) throw new IsTooHighNumberOfMonthError(studyMonth)
			if (studentGrade > 100) throw new IsTooHighNumberOfGradesError(studentGrade)
			if (studentGrade < 59 && studyMonth !== 5 && studyMonth !== 12) throw new IsGradeCorrectionAllowed(studentGrade)
			console.log('Вітаємо! Вам не треба виправляти оцінку!')
		} catch (err) {
			if (err instanceof IsNotNumberError) console.log(err.message + ' Пишіть тільки числа')
			else if (err instanceof IsNegativeNumberError) console.log(err.message + " Не може бути від'ємним.")
			else if (err instanceof IsTooHighNumberOfMonthError) console.log(err.message + ' Не може бути більшим за 12.')
			else if (err instanceof IsTooHighNumberOfGradesError) console.log(err.message + ' Не може бути більшим за 100.')
			else if (err instanceof IsHolidayNumberOfMonthError) console.log(err.message + ' Канікули не враховуються.')
			else if (err instanceof IsGradeCorrectionAllowed) console.log(err.message)
			else console.log(err.message + 'Невідома помилка.')
		}
	}

	window.onload = function () {
		validate()
	}

}

