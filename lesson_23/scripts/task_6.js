// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 6.
	// Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

	function displayTimeInCities(offsetFromBerlin) {
		let now = new Date()
		let time = new Date(now)
		time.setHours(now.getHours() + offsetFromBerlin)

		return time.toTimeString().slice(0, 5)
	}

	document.write(`<p class="text"> Лондон: ${displayTimeInCities(-1)}</p>`)
	document.write(`<p class="text"> Париж: ${displayTimeInCities(0)}</p>`)
	document.write(`<p class="text"> Сідней: ${displayTimeInCities(8)}</p>`)

}

