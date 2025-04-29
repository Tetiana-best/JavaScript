// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При
	// цьому є два стовпці.В
	// одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.При натисканні на
	// зелену стрілку спортсмен
	// переміщається у список для змагань.При натисканні на червону стрілку спортсмен переміщається у
	// загальний список.

	class participantsCompetitions {
		constructor(initList) {
			this.initList = initList
		}

		addItem(event) {
			const customEvent = new CustomEvent('add', {
				bubbles: true,
			})
			const currentImg = event.target
			currentImg.dispatchEvent(customEvent)
		}
		backItem(event) {
			const customEvent = new CustomEvent('back', {
				bubbles: true,
			})
			const currentImg = event.target
			currentImg.dispatchEvent(customEvent)
		}

		changeSportsmens(event) {
			const currentImg = event.target
			const containerItem = currentImg.closest('.general__item')

			const generalList = document.querySelector('.sports__general-list')
			const competitionList = document.querySelector('.sports__competition-list')

			if (generalList.contains(containerItem)) {
				competitionList.append(containerItem)
				currentImg.src = '../img/arrow-red.png'
				currentImg.onclick = this.addItem.bind(this)
			}
			else if (competitionList.contains(containerItem)) {
				generalList.append(containerItem)
				currentImg.src = '../img/arrow-green.png'
				currentImg.onclick = this.backItem.bind(this)
			}
		}

		renderItem(itemName) {
			const divBodyItem = document.createElement('div')
			divBodyItem.className = 'general__item'

			const divName = document.createElement('div')
			divName.innerText = itemName
			divBodyItem.append(divName)

			const imgElArrow = document.createElement('img')
			imgElArrow.src = '../img/arrow-green.png'
			imgElArrow.style.cursor = 'pointer'
			imgElArrow.alt = 'move'

			imgElArrow.onclick = this.addItem.bind(this)

			divBodyItem.append(imgElArrow)

			return divBodyItem

		}
		renderGeneralSection() {
			const generalSectionContainer = document.createElement('div')
			generalSectionContainer.style.border = '3px solid #fff'
			const h2GenEl = document.createElement('h2')
			h2GenEl.className = 'general__title'
			h2GenEl.innerText = 'Загальний список'
			generalSectionContainer.append(h2GenEl)

			const sportsmanListEl = this.renderList()
			generalSectionContainer.append(sportsmanListEl)

			return generalSectionContainer
		}
		renderCompetitionsSection() {
			const competitionsSectionContainer = document.createElement('div')
			competitionsSectionContainer.style.border = '3px solid #fff'
			const h2CompEl = document.createElement('h2')
			h2CompEl.className = 'competition__title'
			h2CompEl.innerText = 'Обрані для змагання'
			competitionsSectionContainer.append(h2CompEl)
			const itemsContainer = document.createElement('div')
			itemsContainer.className = 'sports__competition-list'
			competitionsSectionContainer.append(itemsContainer)
			return competitionsSectionContainer
		}
		renderList() {
			const itemsContainer = document.createElement('div')
			itemsContainer.className = 'sports__general-list'
			for (const itemName of this.initList) {
				const sportsmanEl = this.renderItem(itemName)
				itemsContainer.append(sportsmanEl)
			}
			return itemsContainer
		}

		render(containerSelector) {
			const container = document.querySelector(containerSelector)
			if (containerSelector) {
				container.append(this.renderGeneralSection())
				container.append(this.renderCompetitionsSection())
			}
			container.addEventListener('add', this.changeSportsmens.bind(this))
			container.addEventListener('back', this.changeSportsmens.bind(this))
		}
	}
	const sportsmensList = ['John Depp', 'Sara Wik', 'Den Miro', 'Alan Woo', 'Olga Sich', 'Ivan Hal']

	const manager = new participantsCompetitions(sportsmensList)

	window.onload = (event) => {
		manager.render('.sportsmens')
	}
}


