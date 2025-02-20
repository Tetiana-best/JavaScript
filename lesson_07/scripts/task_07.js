// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	function randomImg(numImg) {
		const minNumImg = 1, maxNumImg = 4
		let randomNumImg = minNumImg + Math.floor(Math.random() * (maxNumImg - minNumImg + 1))
		return `<img src="../img/${randomNumImg}.webp">`
	}
	document.write(`${randomImg()}`)

}










