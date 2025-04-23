// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. Відобразити таблицю 3 * 4 з випадковими числами(її треба динамічно створити і вставити на сторінку).

	function createTable(rows, columns, minRandVal = 0, maxRandVal = 50) {
		const table = document.createElement('table')
		for (let rowInd = 0; rowInd < rows; rowInd++) {
			const tr = document.createElement('tr')
			for (let colInd = 0; colInd < columns; colInd++) {
				const td = document.createElement('td')
				td.innerText = minRandVal + Math.floor(Math.random() * (maxRandVal - minRandVal + 1))
				tr.append(td)
			}
			table.append(tr)
		}
		return table
	}
	const table1 = createTable(3, 4)

	window.onload = function () {
		document.getElementById('myContaner').append(table1)
	}

}

