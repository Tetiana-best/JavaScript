// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість
	// елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку
	// нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

	function renderLists() {
		for (let indexOl = 1; indexOl <= 5; indexOl++) {
			const OlEl = document.createElement('ol')
			let randCountLiElement = 1 + Math.floor(Math.random() * (10 - 1 + 1))
			for (let indexLi = 1; indexLi <= randCountLiElement; indexLi++) {
				const liElement = document.createElement('li')
				liElement.innerText = 1 + Math.floor(Math.random() * (100 - 1 + 1))
				OlEl.append(liElement)
			}
			document.body.append(OlEl)
		}
	}

	function drawInColor() {
		const totalOlLists = document.querySelectorAll('ol')
		for (const ol of totalOlLists) {
			ol.children.length % 2 === 0 ? ol.style.backgroundColor = 'green' : ol.style.backgroundColor = 'red'
		}
	}

	function createButton() {
		const button = document.createElement('button')
		button.innerText = 'Замалюй'
		document.body.append(button)
		return button
	}

	window.onload = function () {
		renderLists()
		const btn = createButton()
		btn.onclick = drawInColor
	}

}










