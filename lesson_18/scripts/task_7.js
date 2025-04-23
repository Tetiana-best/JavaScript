// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 7.Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту
	// 		(авто, автобус, літак - випадаючий список), 
	// 		харчування (сніданок, обід, вечеря – checkbоx) 
	// 		та одного з 3-х гідів(використати - radio buttons).
	// 		Ціни визначте самі. Підрахувати загальну вартість.

	function totalPriceTransport() {
		const selectList = document.querySelectorAll('select')
		let sum = 0
		for (const select of selectList) {
			sum += parseFloat(select.value)
		}
		return sum
	}
	function totalPriceFood() {
		const inputList = document.querySelectorAll('input')
		let sum = 0
		for (const input of inputList) {
			if (input.checked)
				sum += parseFloat(input.value)
		}
		return sum
	}
	function totalPriceGuide() {
		const inputList = document.querySelectorAll('input')
		let sum = 0
		for (const input of inputList) {
			if (input.radio)
				sum += parseFloat(input.value)
		}
		return sum
	}
	window.onload = function () {
		document.querySelector('button').onclick = function () {
			let totalPriceTravel = totalPriceTransport() + totalPriceFood() + totalPriceGuide()
			document.getElementById('result').innerHTML = totalPriceTravel
		}
	}

}
