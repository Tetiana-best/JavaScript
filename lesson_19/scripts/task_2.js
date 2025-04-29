// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати
	// інші(усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний)), усі наступні на 1
	// більше(кожен наступне на 1 більше за попереднього).

	function fillInNumbers(event) {
		const currentInput = event.target
		let userInputValue = parseFloat(currentInput.value)
		let nextInputEl = currentInput.nextElementSibling
		let tempValue = userInputValue
		while (nextInputEl) {
			nextInputEl.value = ++tempValue
			nextInputEl = nextInputEl.nextElementSibling
		}
		let prevInputEl = currentInput.previousElementSibling
		tempValue = userInputValue
		while (prevInputEl) {
			prevInputEl.value = --tempValue
			prevInputEl = prevInputEl.previousElementSibling
		}
	}
	window.onload = function () {
		let inputList = document.querySelectorAll('input')
		for (const inputEl of inputList) {
			inputEl.onchange = fillInNumbers
		}
	}

}
