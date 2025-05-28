// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 6.
	// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
	// Підрахувати для кожного клієнта кількість відвідувань.

	const visitors = [
		"user123",
		"katya88",
		"ivan_petrov",
		"user123",
		"katya88",
		"masha22",
		"user123",
		"masha22",
		"ivan_petrov",
		"katya88"
	];

	const resMap = new Map()
	for (const visitor of visitors) {
		if (visitor) {
			if (resMap.has(visitor)) resMap.set(visitor, resMap.get(visitor) + 1)
			else resMap.set(visitor, 1)
		}
	}

	document.write(`<p class="text"> Початковий масив:</p><br>`)
	document.write(`<p class="text"> ${visitors.join('<br>')}</p>`)

	document.write(`<br><p class="text"> Рішення:</p><br>`)
	resMap.forEach((element, count) => {
		document.write(`<p class="text"> ${count} - ${element} шт</p>`)
	});

}

