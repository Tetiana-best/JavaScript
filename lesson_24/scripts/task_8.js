// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 8.
	// Дано масив показів температур. Підрахувати кількість входжень кожного із показів
	// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
	// Заокруглити вверх значення та підрахувати кількість різних показів.

	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

	const resMap = new Map()
	for (const temperature of temperatures) {
		if (temperature) {
			if (resMap.has(temperature)) resMap.set(temperature, resMap.get(temperature) + 1)
			else resMap.set(temperature, 1)
		}
	}
	document.write(`<p class="text"> Початковий масив:</p><br>`)
	document.write(`<p class="text"> ${temperatures.join(',')}</p>`)

	document.write(`<br><p class="text"> Кількість входжень кожного із показів:</p><br>`)
	resMap.forEach((element, count) => {
		document.write(`<p class="text"> ${count} - ${element} раз.</p>`)
	});
	// ------------------------

	let temperatures1 = temperatures.map((el) => Math.ceil(el))
	document.write(`<br><p class="text"> Масив з заокругленими значеннями:</p><br>`)
	document.write(`<p class="text"> ${temperatures1.join(',')}</p>`)

	document.write(`<p class="text"> Кількість різних показів: ${new Set(temperatures1).size}</p><br>`)
}

