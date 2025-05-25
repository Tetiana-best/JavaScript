// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. 
	//При заході на сайт вітати користувача або відображати повідомлення про те, скільки хвилин
	// залишилось до початку робочого дня(початок о 8.00).

	function displayMinutesToWorkDayStart(interval, startHoursOfWorkingDay, startMinutesOfWorkingDay, endHoursOfWorkingDay, endMinutesOfWorkingDay) {

		const spanEl = document.createElement('span')
		spanEl.className = 'text'
		document.body.append(spanEl)

		setInterval(() => {
			let now = new Date()
			const workStart = new Date()
			workStart.setHours(startHoursOfWorkingDay, startMinutesOfWorkingDay, 0, 0)

			const workEnd = new Date()
			workEnd.setHours(endHoursOfWorkingDay, endMinutesOfWorkingDay, 0, 0)

			let res
			if (now <= workStart) {
				let differenceMs = workStart - now
				let differenceMinutes = Math.floor(differenceMs / 1000 / 60)
				res = `До початку робочого дня залишилось ${differenceMinutes} хв.`
			} else if (now >= workStart && now < workEnd) res = `Робочий день триває.`
			else res = 'Робочий день вже закінчився!'
			spanEl.textContent = res
		}, interval * 1000);
	}

	displayMinutesToWorkDayStart(1, 8, 0, 17, 0)

}

