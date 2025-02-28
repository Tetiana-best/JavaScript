// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let arrElement = [10, 20, 5, 15, 6]

	arrElement.forEach((element, i, arr) => {
		if (element > arr[0]) arr[i] *= 2
	}
	)
	document.write(`<p class="text">Елементи більші ніж перший елемент помножені на 2: ${arrElement}</p>`)
}
