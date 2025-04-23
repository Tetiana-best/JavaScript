// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 1. Розробити калькулятор.

	function getSum() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		let sum = num1 + num2
		document.getElementById('result').innerText = sum
	}
	function getSub() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		let sub = num1 - num2
		document.getElementById('result').innerText = sub
	}
	function getMult() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		let mult = num1 * num2
		document.getElementById('result').innerText = mult
	}
	function getDiv() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		let div = num1 / num2
		document.getElementById('result').innerText = div
	}
	window.onload = function () {
		document.getElementById('add').onclick = getSum
		document.getElementById('subtract').onclick = getSub
		document.getElementById('multiply').onclick = getMult
		document.getElementById('divide').onclick = getDiv
	}


}
