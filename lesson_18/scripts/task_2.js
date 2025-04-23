// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 2. Зробити конвертер валют (курси валют – константи у скрипті).

	function convertEuro() {
		const euroRate = 46
		const grn = parseFloat(document.getElementById('grn').value)
		if (grn) {
			const euroValue = grn / euroRate
			document.getElementById('res1').value = euroValue.toFixed(2)
		}
		else document.getElementById('res1').value = ''
	}
	function convertDoll() {
		const dollarRate = 41
		const grn = parseFloat(document.getElementById('grn').value)
		if (grn) {
			const dollarValue = grn / dollarRate
			document.getElementById('res2').value = dollarValue.toFixed(2)
		}
		else document.getElementById('res2').value = ''
	}
	function convertAll() {
		convertEuro()
		convertDoll()
	}
	window.onload = function () {
		document.querySelector('button').onclick = convertAll
	}

}
