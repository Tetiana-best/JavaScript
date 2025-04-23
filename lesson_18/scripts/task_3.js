// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. Користувач задає рік народження. Визначити кількість років користувача

	function getAge() {
		const currentYear = 2025
		const usersYearOfBirth = parseFloat(document.getElementById('yearbirth').value)
		if (usersYearOfBirth) {
			const userAge = currentYear - usersYearOfBirth
			document.getElementById('res').innerText = userAge
		}
		else document.getElementById('res').value = ''
	}
	window.onload = function () {
		document.getElementById('yearbirth').onchange = getAge
	}

}










