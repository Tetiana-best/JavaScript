// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується
	// таблиця з input, куди користувач вводить оцінки.Після цього натискає на кнопку “get sum” і знаходить середнє значення.

	function createInputList(containerSelector) {
		const container = document.querySelector(containerSelector)
		let countInput = parseInt(document.getElementById('countScore').value)
		if (!isNaN(countInput) || countInput > 0) {
			for (let inputInd = 1; inputInd <= countInput; inputInd++) {
				const inp = document.createElement('input')
				inp.type = 'number'
				inp.id = `score${inputInd}`
				inp.style.marginRight = '10px'
				container.append(inp)
			}
		}
		else Error('Кількість оцінок повинна бути числом і більше за нуль!')
	}
	function getAverage() {
		let countInput = parseInt(document.getElementById('countScore').value)
		let sum = 0
		for (let inputInd = 1; inputInd <= countInput; inputInd++) {
			const sumValueInputs = parseFloat(document.getElementById(`score${inputInd}`).value)
			sum = sum + sumValueInputs
		}
		const avg = sum / countInput
		document.getElementById('res').innerText = avg.toFixed(2)
	}

	window.onload = function () {
		document.getElementById('table').onclick = function () {
			createInputList('#inputContainer')
		}
		document.getElementById('avg').onclick = getAverage
	}

}
