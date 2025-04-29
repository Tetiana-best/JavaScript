// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при
	// кліку робити toogle з класом вибраного елемента).

	function makeBorderGreen(event) {
		const currentImg = event.target
		const containerImg = currentImg.closest('.main__picture')
		if (containerImg)
			containerImg.classList.toggle('selected')
	}
	window.onload = (event) => {
		const imgList = document.querySelectorAll('.main__picture')
		for (const imgEl of imgList) {
			imgEl.addEventListener('click', makeBorderGreen)
		}
	}
}

