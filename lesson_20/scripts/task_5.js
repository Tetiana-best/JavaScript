// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які
	// містять вказаний фрагмент.

	class Search {
		constructor(title, employeesList, cssObj) {
			this.title = title
			this.employeesList = employeesList
			this.cssObj = cssObj
		}
		renderTitel() {
			const h2El = document.createElement('h2')
			h2El.className = this.cssObj.titleClass
			h2El.innerText = this.title
			return h2El
		}
		renderInputEl() {
			const inpEl = document.createElement('input')
			inpEl.type = 'text'
			inpEl.id = 'searchInp'
			inpEl.placeholder = 'Введіть ім\'я працівника...'
			this.$el = inpEl

			return inpEl
		}
		renderUlList() {
			const ulEl = document.createElement('ul')
			for (const el of this.employeesList) {
				const liEl = document.createElement('li')
				liEl.innerText = el
				ulEl.append(liEl)
			}

			this.ulEl = ulEl

			return ulEl
		}
		userSearch() {
			const userInpText = this.$el.value.toLowerCase()
			const liList = this.ulEl.querySelectorAll('li')
			for (const li of liList) {
				let liText = li.textContent.toLowerCase()
				if (liText.includes(userInpText))
					li.style.display = ''
				else li.style.display = 'none'
			}
		}
		render(containerSelector) {
			const itemsContainer = document.createElement('div')
			itemsContainer.className = this.cssObj.containerClass
			itemsContainer.append(this.renderTitel(), this.renderInputEl(), this.renderUlList())

			if (containerSelector)
				document.querySelector(containerSelector).append(itemsContainer)
			return itemsContainer
		}
	}

	window.onload = (e) => {
		const employeesList = ['Brad Pitt', 'Johnny Depp', 'Leonardo DiCaprio', 'Tom Hanks', 'Robert Downey Jr.', 'Keanu Reeves', 'Ryan Gosling']
		const search1 = new Search(
			'Список працівників', employeesList,
			{
				containerClass: 'container',
				titleClass: 'title',
			},
		)
		search1.render('body')
		search1.$el.addEventListener('input', (e) => {
			search1.userSearch(e)
		}
		)
	}

}

