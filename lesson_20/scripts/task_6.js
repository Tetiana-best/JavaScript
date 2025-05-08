// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 6. Дано список автомобілів (марка, рік випуску, ціна). 
	// Сформувати елементи для фільтрування з використанням випадаючого 
	// списку(контент цих випадаючих списків сформувати у залежності 
	// від переданого списку).

	class Car {
		constructor(title, carObj, selectObj, cssObj) {
			this.title = title
			this.carObj = carObj
			this.cssObj = cssObj
			this.selectObj = selectObj
		}

		renderTitel() {
			const h2El = document.createElement('h2')
			h2El.className = this.cssObj.titleClass
			h2El.innerText = this.title
			return h2El
		}
		renderCreateSelectList() {
			const selectElContainer = document.createElement('div')
			// selectElContainer.className = this.cssObj.selectAreaClass

			for (const selectItem of this.selectObj) {
				const select = document.createElement('select')
				select.id = selectItem.id
				select.innerText = selectItem.selectTitel

				const defaultOption = document.createElement('option')
				defaultOption.value = 'default'
				defaultOption.innerText = 'Виберіть...'
				select.append(defaultOption)

				const filterList = []
				const filterField = selectItem.filterField

				for (const car of this.carObj) {
					if (!filterList.includes(car[filterField])) {
						filterList.push(car[filterField])

						const optionEl = document.createElement('option')
						optionEl.value = car[filterField]
						optionEl.innerText = car[filterField]
						select.append(optionEl)
					}
				}
				selectElContainer.append(select)
			}
			return selectElContainer
		}

		renderUlList() {
			const ulList = document.createElement('ul')
			ulList.id = 'carList'

			for (const car of this.carObj) {
				const liEl = document.createElement('li')
				liEl.innerText = `${car.brand} - ${car.year} - ${car.price}`
				ulList.append(liEl)
			}
			return ulList
		}

		filterCars() {
			let filteredObj = this.carObj

			for (const selectItem of this.selectObj) {
				const select = document.getElementById(selectItem.id)

				if (select.value !== '') {
					filteredObj = filteredObj.filter(car =>
						car[selectItem.filterField] == select.value)
				}
			}
			return filteredObj
		}

		renderFilteredList(filteredList) {
			const ul = document.getElementById('carList')
			ul.innerHTML = ''

			for (const car of filteredList) {
				const liEl = document.createElement('li')
				liEl.innerText = `${car.brand} - ${car.year} - ${car.price}`
				ul.append(liEl)
			}
		}

		filterAndRenderList() {
			this.renderFilteredList(this.filterCars())
		}

		render(containerSelector) {
			const itemsContainer = document.createElement('div')
			itemsContainer.className = this.cssObj.containerClass
			itemsContainer.append(this.renderTitel(), this.renderCreateSelectList(),
				this.renderUlList())

			if (containerSelector)
				document.querySelector(containerSelector).append(itemsContainer)
			return itemsContainer
		}
	}

	window.onload = (e) => {
		const carObj =
			[
				{ brand: 'Toyota', year: 2020, price: 15000 },
				{ brand: 'Toyota', year: 2020, price: 17000 },
				{ brand: 'Hyindai', year: 2020, price: 28000 },
				{ brand: 'Hyindai', year: 2019, price: 26000 },
				{ brand: 'Toyota', year: 2019, price: 16000 },
				{ brand: 'Audi', year: 2020, price: 25000 },
				{ brand: 'Hyindai', year: 2020, price: 27000 },
				{ brand: 'Toyota', year: 2019, price: 15500 }
			]
		const selectObj =
			[
				{ id: 'brandSelect', selectTitel: 'Марка', filterField: 'brand' },
				{ id: 'yearSelect', selectTitel: 'Рік', filterField: 'year' }
			]
		const car1 = new Car(
			'Список автомобілів', carObj, selectObj,
			{
				containerClass: 'container',
				titleClass: 'title',
			},
		)
		car1.render('body')
		for (const selectItem of car1.selectObj) {
			const select = document.getElementById(selectItem.id)
			select.addEventListener('change', () => car1.filterAndRenderList())
		}
	}

}

