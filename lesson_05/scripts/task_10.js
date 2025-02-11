// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let count = 1
	const countParagraf = parseInt(prompt(`Виведіть кількість абзаців:`))
	for (let countTitle = 1; countTitle <= countParagraf; countTitle++) {
		document.write(`<h1 class = "title">Заголовок ${countTitle}</h1>`)
		const countRow = count++
		for (let countText = 1; countText <= countRow; countText++) {
			document.write(`<p class = "text">Розділ ${countTitle}, параграф ${countText}</p><br>`)
		}

	}

}















