// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. 
	// Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів
	// придатності.Визначити чи є він придатним на даний момент.

	function isYogurtStillGood(startDateString, shelfLife) {

		const spanEl = document.createElement('span')
		spanEl.className = 'text'
		document.body.append(spanEl)

		const [year, month, day] = startDateString.split('.').map(Number)
		const startDateOfShelfLife = new Date(year, month - 1, day)

		const expirationDate = new Date(startDateOfShelfLife)
		expirationDate.setDate(expirationDate.getDate() + shelfLife)

		let res
		const now = new Date()

		if (now >= startDateOfShelfLife && now <= expirationDate) {
			let differenceMs = expirationDate - now
			const MsInOneDay = 1000 * 60 * 60 * 24
			let daysUntilExpiration = Math.floor(differenceMs / MsInOneDay)
			res = `Йогурт ще придатний до використання. До кінця сроку залишилось ${daysUntilExpiration} дн.`
		} else if (now > expirationDate) res = `Йогурт вже не придатний до використання.`
		else res = `Введіть коректну дату виробництва.`

		spanEl.textContent = res
		return res
	}
	isYogurtStillGood('2025.05.20', 30)
}

