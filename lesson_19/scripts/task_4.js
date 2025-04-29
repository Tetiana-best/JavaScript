// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із
	// 				клітинок, то до відповідної таблиці додається червона рамка(спробуйте додати можливість відображення кількості кліків біля
	// 				назви таблиці з використанням відповідно доданого для цього атрибута).

	function renderTable(tablesNum = 3, rowsNum = 3, columnsNum = 3, minRandVal = 1, maxRandVal = 10) {

		for (let tableInd = 1; tableInd <= tablesNum; tableInd++) {
			const h3El = document.createElement('h3')
			h3El.dataset.clicks = 0
			h3El.dataset.tableIndex = tableInd
			h3El.innerText = `Таблиця ${tableInd}`
			document.body.append(h3El)
			const tableEl = document.createElement('table')
			tableEl.titleElement = h3El
			for (let rowInd = 1; rowInd <= rowsNum; rowInd++) {
				const trEl = document.createElement('tr')
				for (let colInd = 1; colInd <= columnsNum; colInd++) {
					const tdEl = document.createElement('td')
					let randVal = minRandVal + Math.floor(Math.random() * (maxRandVal - minRandVal + 1))
					tdEl.innerText = randVal
					trEl.append(tdEl)
				}
				tableEl.append(trEl)
			}
			document.body.append(tableEl)
		}
	}
	function makeTableRed(event) {
		const currentTd = event.target
		const tableEl = currentTd.closest('table')
		tableEl.style.borderColor = 'red'
	}
	function countClicks(event) {
		const currentTd = event.target
		const tableEl = currentTd.closest('table')
		const h3El = tableEl.previousElementSibling
		let clicks = parseInt(h3El.dataset.clicks)
		h3El.dataset.clicks = ++clicks
		const tableNummer = h3El.dataset.tableIndex
		h3El.innerText = `Таблиця ${tableNummer} - кліків: ${clicks}`
	}
	function allClicks(event) {
		makeTableRed(event)
		countClicks(event)
	}
	window.onload = (event) => {
		renderTable()
		const tdList = document.querySelectorAll('td')
		for (const tdEl of tdList) {
			tdEl.addEventListener('click', allClicks)
		}
	}
}