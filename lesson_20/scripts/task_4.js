// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 4.На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків
	// окремо на кнопках і окремо на інпутах.

	class ClickTrecker {
		constructor(title, buttonTitleList, textSendButton, resultObj, cssObj) {
			this.title = title
			this.buttonTitleList = buttonTitleList
			this.textSendButton = textSendButton
			this.resultObj = resultObj
			this.cssObj = cssObj
			this.buttonClicks = 0
			this.inputClicks = 0
		}

		renderTitel() {
			const h2El = document.createElement('h2')
			h2El.className = this.cssObj.titleClass
			h2El.innerText = this.title
			return h2El
		}
		renderFormEl() {
			const divClickAreaEl = document.createElement('div')
			divClickAreaEl.className = this.cssObj.clickAreaClass
			for (const buttonTitle of this.buttonTitleList) {
				const divBodyEl = document.createElement('div')
				const inpEl = document.createElement('input')
				inpEl.type = 'text'
				const btnEl = document.createElement('button')
				btnEl.innerText = buttonTitle
				divBodyEl.append(inpEl, btnEl)
				divClickAreaEl.append(divBodyEl)
			}
			return divClickAreaEl
		}
		renderSendBtnEl() {
			const sendBtnEl = document.createElement('button')
			sendBtnEl.innerText = this.textSendButton
			return sendBtnEl
		}
		renderResults() {
			const divResBodyEl = document.createElement('div')
			divResBodyEl.className = this.cssObj.resultsClass

			for (const item of this.resultObj) {
				const divEl = document.createElement('div')
				divEl.id = item.id
				divEl.innerText = item.title
				divEl.dataset.clicks = '0'
				divResBodyEl.append(divEl)
			}
			return divResBodyEl
		}
		clicks(e) {
			if (e.target.tagName === 'BUTTON') {
				const btnDiv = document.getElementById('buttonClicks')
				btnDiv.dataset.clicks = ++this.buttonClicks
				btnDiv.innerText = `Кліки на кнопках: ${this.buttonClicks}`
			}
			if (e.target.tagName === 'INPUT') {
				const inpDiv = document.getElementById('inputClicks')
				inpDiv.dataset.clicks = ++this.inputClicks
				inpDiv.innerText = `Кліки на інпутах: ${this.inputClicks}`
			}
		}
		render(containerSelector) {
			const formEl = document.createElement('form')
			formEl.className = this.cssObj.formClass
			formEl.append(this.renderTitel(), this.renderFormEl(), this.renderSendBtnEl(), this.renderResults())

			if (containerSelector)
				document.querySelector(containerSelector).append(formEl)

			this.$el = formEl
			return formEl
		}
	}

	window.onload = (e) => {
		const buttonTitleList = ['Кнопка 1', 'Кнопка 2']
		let resultObj = [
			{
				id: 'buttonClicks',
				title: 'Кліки на кнопках:',
			},
			{
				id: 'inputClicks',
				title: 'Кліки на інпутах:',
			},
		]
		const clickTrecker1 = new ClickTrecker(
			'Клік-трекер', buttonTitleList, 'Відправити',
			resultObj,
			{
				formClass: 'form-container',
				titleClass: 'form-title',
				clickAreaClass: 'click-area',
				resultsClass: 'results',
			},
		)
		clickTrecker1.render('body')
		clickTrecker1.$el.addEventListener('click', (e) => {
			e.preventDefault()
			clickTrecker1.clicks(e)
		}
		)
	}

}