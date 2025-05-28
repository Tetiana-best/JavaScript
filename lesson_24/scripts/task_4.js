// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 4.
	// Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu,
	// com, org,...).

	const urls = [
		"https://www.google.com",
		"http://university.edu",
		"https://nonprofit.org",
		"http://mail.google.com",
		"https://anotheruniversity.edu",
		"https://opensource.org",
		"http://example.com",
		"http://example.org"
	];

	const resMap = new Map()
	for (const url of urls) {
		let regex = /\.\w+$/
		let urlRegex = url.match(regex)
		if (urlRegex) {
			const urlPart = urlRegex[0].slice(1)
			if (resMap.has(urlPart)) resMap.set(urlPart, resMap.get(urlPart) + 1)
			else resMap.set(urlPart, 1)
		}
	}

	document.write(`<p class="text"> ${urls.join('<br>')}</p>`)
	resMap.forEach((element, count) => {
		document.write(`<p class="text"> ${count} - ${element} шт</p>`)
	});


}