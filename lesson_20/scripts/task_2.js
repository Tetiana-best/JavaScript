// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	// Завдання 2. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які
	// їдуть вниз.При кліку на танк він вибухає і зникає з екрану.

	class Tank {
		constructor(imagesObj, maxSpeed, speed, cssObj, gameStateObj) {
			this.top = 0
			this.maxTop = 100
			this.delayDisplayNone = 1000
			this.imagesObj = imagesObj
			this.maxSpeed = maxSpeed
			this.speed = speed
			this.cssObj = cssObj

			this.gameStateObj = gameStateObj
		}
		getRandomValue(minValue, maxValue) {
			return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		}
		generateAndSetRandomLeftPositionTank() {
			this.left = this.getRandomValue(5, 95)
			this.tank.style.left = this.left + '%'
		}
		goDown() {
			this.top += this.speed
			if (this.top >= this.maxTop) {
				this.top = 0
				this.generateAndSetRandomLeftPositionTank()
			}
			this.tank.style.top = this.top + '%'
		}

		onClick() {
			clearInterval(this.intervalId)
			this.tank.setAttribute('src', this.imagesObj.boom)
			this.onDisplayNone()

			this.gameStateObj.destroyedCount++
			if (this.gameStateObj.destroyedCount === this.gameStateObj.totalTanks) {
				this.showGameOver()
			}
		}
		onDisplayNone() {
			setTimeout(() => {
				this.tank.style.display = 'none'
			}, this.delayDisplayNone);
		}
		showGameOver() {
			const gameOverEl = document.createElement('img')
			gameOverEl.setAttribute('src', this.imagesObj.gameover)
			gameOverEl.className = this.cssObj.gameoverClass
			document.body.appendChild(gameOverEl)
		}
		render(containerSelector) {
			const tankElImg = document.createElement('img')
			tankElImg.setAttribute('src', this.imagesObj.tank)
			tankElImg.className = this.cssObj.tankClass
			this.tank = tankElImg

			this.generateAndSetRandomLeftPositionTank()

			this.tank.onclick = this.onClick.bind(this)
			document.querySelector(containerSelector).append(this.tank)
			this.intervalId = setInterval(() => {
				this.goDown()
			}, this.maxSpeed)
		}
	}
	//---------------
	const imagesObj = {
		tank: "../img/tank.png",
		boom: "../img/boom.png",
		gameover: "../img/game-over.png",
	}
	const gameStateObj = {
		destroyedCount: 0,
		totalTanks: 9,
	}
	for (let i = 0; i < gameStateObj.totalTanks; i++) {
		const tank1 = new Tank(
			imagesObj,
			Math.random() * 50 + 30,
			Math.random() * 0.3 + 0.2,
			{
				tankClass: 'tank',
				gameoverClass: 'gameover',
			},
			gameStateObj
		)
		tank1.render('body')
	}

}
