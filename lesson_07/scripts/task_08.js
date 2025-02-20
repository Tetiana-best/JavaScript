// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	function randomImg(numImg) {
		const minNumImg = 1, maxNumImg = 4
		let randomNumImg = minNumImg + Math.floor(Math.random() * (maxNumImg - minNumImg + 1))
		return `<br><a href="#"><h1>Кіт</h1><img src="../img/${randomNumImg}.webp"></a>`
	}
	document.write(`${randomImg()}`)

}







