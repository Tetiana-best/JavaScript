// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 1.
	// Виводити на екран скільки хвилин користувач вже на сайті

	function displayCountMinutes(interval) {
		const start = new Date()
		console.log(start);


		const spanEl = document.createElement('span')
		spanEl.className = 'text'
		document.body.append(spanEl)

		setInterval(() => {
			let now = new Date()
			let seconds = Math.floor((now - start) / 1000)
			let minutes = Math.floor((seconds) / 60)
			spanEl.textContent = `Ви на сайті вже ${minutes} хвилин ${seconds} секунд.`
		}, interval * 1000);
	}

	displayCountMinutes(1)

}