// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// 	Завдання 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином
	// вибираються 3 і відображаються у окремих div(їх треба створити і додати на сторінку).

	const wishList = ['Love', 'Health', 'Money', 'Happiness']
	function generationRandWish(arr) {
		const randIndex = Math.floor(Math.random() * arr.length)
		const randWish = arr[randIndex]
		return randWish
	}
	function createDivWithWish() {
		const divEl = document.createElement('div')
		divEl.innerText = generationRandWish(wishList)
		return divEl
	}
	function generationDivList(divCount = 3, container) {
		const body = document.body
		for (let i = 0; i < divCount; i++) {
			const div = createDivWithWish()
			body.append(div)
		}
	}
	window.onload = function () {
		generationDivList(3, 'body')
	}

}