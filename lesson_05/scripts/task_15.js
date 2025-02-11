// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let image1
	let image2
	let image3

	for (let i = 1; i <= 3; i++) {
		const minValueImg = 1, maxValueImg = 4
		let randomValueImg = minValueImg + Math.floor(Math.random() * (maxValueImg - minValueImg + 1))

		if (i === 1) image1 = randomValueImg
		if (i === 2) image2 = randomValueImg
		if (i === 3) image3 = randomValueImg

		document.write(`<img src="../img/${randomValueImg}.webp"
					style="
					width: 15%;
					aspect-ratio:200 / 100;
					object-fit: contain;"
					/>`)
	}

	let prize = 0
	if (image1 === image2 && image2 === image3) {
		switch (image1) {
			case 1: prize = 100
				break;
			case 2: prize = 200
				break;
			case 3: prize = 500
				break;
			case 4: prize = 1000
				break;

			default: prize = 0
				break;
		}
	}
	document.write(`<p class="text">Ваш виграш становить ${prize} грн.</p>
	<style>
		.text {
		margin-block-start: 30px;
		color: blue;
		font-size: 60px;
		}
		</style>`)

}


















// let sumOdd = 0
// let countNumbers = 0

// let numStartInterval = parseInt(prompt(`Введіть початкове значення діапазону:`))
// let numEndInterval = parseInt(prompt(`Введіть кінцеве значення діапазону:`))
// if (numStartInterval > numEndInterval) {
// 	let temp = numStartInterval
// 	numStartInterval = numEndInterval
// 	numEndInterval = temp
// }
// for (let index = numStartInterval; index <= numEndInterval; index++) {

// 	if (index % 2 !== 0) {
// 		countNumbers++
// 		sumOdd += index
// 		document.write(`<span class="text">${index} </span>`)
// 	}
// 	if (countNumbers === 5) break
// }

// document.write(`<p class="text">Сума непарних 5 чисел у введеному Вами диапозоні: ${sumOdd}.</p>
// 		<style>
// 		.text {
// 		margin-block-end: 10px;
// 		color: blue;
// 		font-size: 20px;
// 		}
// 		</style>`)















