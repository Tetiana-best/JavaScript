// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 4.

	class Yard {
		constructor(x, y, imagePath, updateInterval) {
			this.x = x
			this.y = y
			this.imagePath = imagePath
			this.updateInterval = updateInterval
		}
		render(containerSelector) {
			const imgEl = document.createElement('img')
			imgEl.setAttribute('src', this.imagePath)
			imgEl.style.top = this.y + 'px'
			imgEl.style.left = this.x + 'px'
			this.img = imgEl

			if (containerSelector) document.querySelector(containerSelector).append(imgEl)
			return this
		}
	}

	class House extends Yard {
		constructor(x, y, imagePath, updateInterval) {
			super(x, y, imagePath, updateInterval)
		}
		move() {
			let time = 0
			setInterval(() => {
				let scale = 1 + Math.abs(Math.sin(time))
				this.img.style.transform = `scale(${scale})`
				time += 0.2
			}, this.updateInterval * 1000);
		}
	}
	const House1 = new House(Math.random() * 1000 + 500, Math.random() * 1000 + 500, "../img/dom.png", 1)
	House1.render('body').move()

	class Dog extends Yard {
		constructor(x, y, imagePath, updateInterval) {
			super(x, y, imagePath, updateInterval)
		}
		move() {
			setInterval(() => {
				this.x += Math.floor(Math.random() * 500) - 200
				if (this.x > window.innerWidth - 250 || this.x < 0) this.x = window.innerWidth - 250
				if (this.x < 0) this.x = 0
				this.img.style.left = this.x + 'px'
			}, this.updateInterval * 1000);

			return this
		}
	}
	const Dog1 = new Dog(Math.random() * 1000 + 500, Math.random() * 1000 + 500, "../img/dog.png", 1)
	Dog1.render('body').move()

	class Bird extends Dog {
		constructor(x, y, imagePath, updateInterval) {
			super(x, y, imagePath, updateInterval)
		}
		move() {
			setInterval(() => {
				this.y += Math.floor(Math.random() * 500) - 200
				if (this.y > window.innerHeight - 250 || this.y < 0) this.y = window.innerHeight - 250
				if (this.y < 0) this.y = 0
				this.img.style.top = this.y + 'px'
			}, this.updateInterval * 1000);
		}
	}
	const Bird1 = new Bird(Math.random() * 1000 + 500, Math.random() * 1000 + 500, "../img/bird.png", 1)
	Bird1.render('body').move().move()
}