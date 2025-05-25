// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 8.
	// Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

	let now = new Date()
	let start = new Date(now)

	function getSecondsUntilMouseMove() {
		const finish = new Date()
		const secondsUntilMouseMove = ((finish - start) / 1000).toFixed(0)

		const spanEl = document.createElement('span')
		spanEl.className = 'text'
		document.body.append(spanEl)
		spanEl.className = 'text'
		spanEl.textContent = `Пройшло ${secondsUntilMouseMove} секунд після заходу на сайт перш ніж користувач зробив рух мишкою.`

		document.removeEventListener('mousemove', getSecondsUntilMouseMove)
	}
	document.addEventListener('mousemove', getSecondsUntilMouseMove)
}

