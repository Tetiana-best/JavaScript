// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Користувач може змінювати колір фону, що вибирає користувач з використанням input type = "color".
	// Зберігати цей колір і відновлювати при наступному відкритті.Також зберігати і відображати
	// кількість змін протягом одного сеансу.

	function setColor(color) {
		document.body.style.backgroundColor = color
		localStorage.setItem('bkgColor', color)
	}
	function onSetColor() {
		const color = this.value
		setColor(color)

		let clickNumber = parseInt(sessionStorage.getItem('setColorNumber') ?? 0)
		sessionStorage.setItem('setColorNumber', ++clickNumber)
		updateChangeText(clickNumber)
	}

	function updateChangeText(number) {
		document.getElementById('changeNumber').innerText = `Количество изменений цвета: ${number}`
	}

	window.onload = function () {
		const colorInput = document.getElementById('colorSelector')
		colorInput.oninput = onSetColor

		const savedColor = localStorage.getItem('bkgColor')
		if (savedColor) {
			setColor(savedColor)
			colorInput.value = savedColor
		}
		const currentClicks = sessionStorage.getItem('setColorNumber') ?? 0
		updateChangeText(currentClicks)
	};
}

