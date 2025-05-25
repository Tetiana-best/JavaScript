// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 9. 
	// Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки
	// вводиться). Визначити чи відпустка вже триває і чи не закінчилась

	function isMaternityLeave(startDateString, countMaternityDays) {

		const spanEl = document.createElement('span')
		spanEl.className = 'text'
		document.body.append(spanEl)

		const [day, month, year] = startDateString.split('.').map(Number)
		const startOfMaternity = new Date(year, month - 1, day)

		const endOfMaternity = new Date(startOfMaternity)
		endOfMaternity.setDate(endOfMaternity.getDate() + countMaternityDays)

		let res
		const now = new Date()

		if (now < startOfMaternity) {
			const differenceMs = startOfMaternity - now
			const MsInOneDay = 1000 * 60 * 60 * 24
			let daysLeft = Math.floor(differenceMs / MsInOneDay)
			res = `Декретна відпустка ще не почалась.Почнеться через ${daysLeft} дн.`
		} else if (now >= startOfMaternity && now <= endOfMaternity)
			res = `Декретна відпустка триває.`
		else res = 'Декретна відпустка вже закінчилась!'

		spanEl.textContent = res
		return res
	}
	isMaternityLeave('15.03.2025', 200)


}

