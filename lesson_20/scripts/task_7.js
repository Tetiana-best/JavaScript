// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 7.Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою
	// швидкістю рухається вниз(у setInterval викликати метод, у якому додавати крок до top).Як тільки сніжинка досягає
	// нижньої частини екрану (top > maxTop) вона знову повинна з’явитись у верхній частині екрану(top = 0).

	class Snowflake {
		constructor(elSnowflake, initInterval = 20, minValue = 1, maxValue = 3) {
			this.elSnowflake = elSnowflake
			this.top = 0
			this.interval = initInterval
			this.maxTop = window.innerHeight
			this.minValue = minValue
			this.maxValue = maxValue

		}
		getRandomDelta() {
			return this.minValue + Math.floor(Math.random() * (this.maxValue - this.minValue + 1))
		}
		goDown() {
			this.top += this.getRandomDelta()
			if (this.top > this.maxTop) this.top = 0
			this.elSnowflake.style.top = this.top + 'px'
		}
		start() {
			setInterval(() => {
				this.goDown()
			}, this.interval);
		}
	}

	window.onload = function () {
		const snowflake = document.querySelector('.snowflake')
		const snowflake1 = new Snowflake(snowflake)
		snowflake1.start()
	}

}









// ----------------------------------для себя----------------------------------


// class Snowflake {
// 	constructor(elSnowflake, initInterval = 20) {
// 		this.interval = initInterval
// 		this.elSnowflake = elSnowflake
// 		this.maxTop = window.innerHeight
// 	}
// 	getRandomDelta(minValue = 1, maxValue = 3) {
// 		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
// 	}
// 	goDown() {
// 		let currentTop = (parseInt(this.elSnowflake.style.top) + this.getRandomDelta()) || 0
// 		if (currentTop > this.maxTop) currentTop = 0
// 		this.elSnowflake.style.top = currentTop + 'px'
// 	}
// 	start() {
// 		setInterval(() => {
// 			this.goDown()
// 		}, this.interval);
// 	}
// }

// window.onload = function () {
// 	const snowflake = document.querySelector('.snowflake')
// 	const snowflake1 = new Snowflake(snowflake)
// 	snowflake1.start()
// }

