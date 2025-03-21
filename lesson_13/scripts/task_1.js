// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	function getNewsTimeout(question, url, timeDelay) {
		let userQuestion = confirm(question)
		if (userQuestion) {
			window.location.href = url
		} else {
			setTimeout(() => {
				window.location.href = url
			}, timeDelay);
		}
	}
	getNewsTimeout('Чи хочете Ви читати новини?', 'https://www.ukr.net/', 20000)

}
