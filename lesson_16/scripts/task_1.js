// Строгий режим
// "use strict"
if (confirm('Почати тестування?')) {
	// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
	// Дата представляється структурою із трьома полями.
	// Реалізувати методи збільшення / зменшення дати на 
	// певну кількість днів, місяців чи років.Введення та виведення дати реалізувати за допомогою методу  toString.

	class TDate {
		constructor(day, month, year) {
			if (year === 0)
				throw new Error(`<p class="text">Рік не може бути нульовим!<br> </p>`)
			// -----------------------------------------------------------------------
			// відкрите поле, просто створюємо додавши у this
			this.year = year
			// захищене поле, використовуємо приватне поле(#) і setter
			this.Month = month
			// захищене поле, використовуємо приватне поле(#) і setter
			this.Day = day
		}

		// день
		#day
		get Day() {
			return this.#day
		}
		set Day(newDay) {
			if (newDay < 1 || newDay > 31)
				throw new Error(`<p class="text">День не може бути менше за 1 та більше за 31!<br></p>`)
			if (this.Month === 2) {
				if ((this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0)) {
					if (newDay > 29) throw new Error(`<p class="text">У лютому в високосному році не може бути більш ніж 29 днів!<br></p>`)
				}
				else if (newDay > 28) throw new Error(`<p class="text">У лютому не може бути більш ніж 28 днів!<br></p>`)
			}
			if ((this.Month === 4 || this.Month === 6 || this.Month === 9 || this.Month === 11) && newDay > 30)
				throw new Error(`<p class="text">У цьому місяці не може бути більш ніж 30 днів!<br></p>`)
			this.#day = newDay
		}
		// місяць
		#month
		get Month() {
			return this.#month
		}
		set Month(newMonth) {
			if (newMonth < 1 || newMonth > 12)
				throw new Error(`<p class="text">Місяць не може бути менше за 1 та більше за 12!<br> </p>`)
			this.#month = newMonth
		}
		// --------------------------------

		getDaysInMonth() {
			if (this.Month === 2) return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0) ? 29 : 28
			return ((this.Month === 4 || this.Month === 6 || this.Month === 9 || this.Month === 11)) ? 30 : 31
		}
		// методи збільшення/зменшення дати на певну кількість днів
		increaseOrDecreaseDay(userCountDay) {
			let resultDay = this.Day + userCountDay

			while (resultDay > this.getDaysInMonth()) {
				resultDay = resultDay - this.getDaysInMonth()
				this.Month++
				if (this.Month > 12) {
					this.Month = 1
					this.year++
				}
			}
			while (resultDay < 1) {
				this.Month--
				if (this.Month < 1) {
					this.Month = 12
					this.year--
				}
				resultDay = resultDay + this.getDaysInMonth()
			}
			this.Day = resultDay
		}
		// методи збільшення/зменшення дати на певну кількість місяців
		increaseOrDecreaseMonth(userCountMonth) {
			let resultMonth = this.Month + userCountMonth

			while (resultMonth > 12) {
				resultMonth = resultMonth - 12
				this.year++
			}
			while (resultMonth < 1) {
				resultMonth = resultMonth + 12
				this.year--
			}
			let countDaysInMonth = this.getDaysInMonth()
			if (this.Day > countDaysInMonth) this.Day = countDaysInMonth

			this.Month = resultMonth
		}
		// методи збільшення/зменшення дати на певну кількість років
		increaseOrDecreaseYear(userCountYear) {
			this.year = this.year + userCountYear
			if (this.year === 0)
				throw new Error(`<p class="text">Рік не може бути нульовим!<br> </p>`)
		}
		// -----------------
		toString() {
			return `<p class="text">Оновлена дата після збільшення / зменшення: ${this.Day}. ${this.Month}. ${this.year}</p> `
		}
	}

	try {
		const tDate1 = new TDate(30, 3, 1984)
		tDate1.increaseOrDecreaseDay(-70)
		tDate1.increaseOrDecreaseMonth(-5)
		tDate1.increaseOrDecreaseYear(-5)
		document.write(tDate1)
	} catch (error) {
		document.write(error.message);
	}
	document.write(`<p class="text">Гарного дня!</p>`)
}
