// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні
	// бути зафарбовані у червоний колір.

	function makeNextDivRed(event) {
		const currentDiv = event.target
		let nextDivEl = currentDiv.nextElementSibling
		while (nextDivEl) {
			nextDivEl.style.color = 'red'
			nextDivEl = nextDivEl.nextElementSibling
		}
	}
	window.onload = function () {
		let divList = document.querySelectorAll('div')
		for (const divEl of divList) {
			divEl.onclick = makeNextDivRed
		}
	}

}
