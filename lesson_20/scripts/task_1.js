// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 1.Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
	// Кожна зірка(це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального
	// до максимального розміру.Як тільки досягнути
	// максимального розміру зірочка повинна з’являтися у іншій випадковій позиції

	window.onload = function () {
		class Star {
			constructor(minScale, maxScale, maxStep, maxSpeed, cssObj) {
				this.minScale = minScale
				this.maxScale = maxScale
				this.maxStep = maxStep
				this.maxSpeed = maxSpeed
				this.cssObj = cssObj
				this.scale = this.minScale
			}
			getRandomValue(minValue, maxValue) {
				return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			}
			generateAndSetRandomPositionStar() {
				this.top = this.getRandomValue(0, 100)
				this.left = this.getRandomValue(0, 100)
				this.star.style.top = this.top + '%'
				this.star.style.left = this.left + '%'
			}
			changeScaleAndPositionStar() {
				this.scale += this.maxStep
				if (this.scale >= this.maxScale) {
					this.scale = this.minScale
					this.generateAndSetRandomPositionStar()
				}
				this.star.style.transform = `scale(${this.scale})`
			}
			render(containerSelector) {
				const starEl = document.createElement('div')
				starEl.className = this.cssObj.containerClass
				this.star = starEl

				this.generateAndSetRandomPositionStar()
				if (containerSelector) {
					document.querySelector(containerSelector).append(starEl)
				}
				this.interval = setInterval(() => this.changeScaleAndPositionStar(), this.maxSpeed)
				return starEl
			}
		}
		for (let i = 0; i < 100; i++) {
			const star1 = new Star(0.2, 1.5, Math.random() * 0.05, Math.random() * 500 + 200,
				{
					containerClass: 'star',
				}
			)
			star1.render('body')
		}
	}
}
