// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу,
	// порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично
	// замінювати значення його на 0. Використати делегування..

	class UserDataForm {
		constructor(title, labelTitleList, cssObj) {
			this.title = title
			this.labelTitleList = labelTitleList
			this.cssObj = cssObj
		}
		renderTitle() {
			const titleEl = document.createElement('h2');
			titleEl.className = this.cssObj.titleClass
			titleEl.innerText = this.title
			return titleEl
		}
		renderInpEl() {
			const inpContainer = document.createElement('div');
			for (const elTitleLable of this.labelTitleList) {
				const inputArea = document.createElement('div');
				inputArea.className = this.cssObj.inputBodyClass
				const label = document.createElement('label')
				label.innerText = elTitleLable
				inputArea.append(label)
				const inputEl = document.createElement('input')
				inputEl.type = 'number'
				inputArea.append(inputEl)
				inpContainer.append(inputArea)
			}
			return inpContainer
		}
		render(containerSelector) {
			const formEl = document.createElement('form');
			formEl.className = this.cssObj.formClass

			formEl.append(this.renderTitle())
			formEl.append(this.renderInpEl())

			if (containerSelector)
				document.querySelector(containerSelector).append(formEl)

			this.$el = formEl
			return formEl
		}
	}

	window.onload = (event) => {
		const labelTitleList = ['вік', 'зріст', 'вага', 'заробітна плата', 'стаж', 'номер відділу', 'порядковий номер']
		const userDataForm1 = new UserDataForm(
			'Введіть персональні дані', labelTitleList,
			{
				formClass: 'form-container',
				titleClass: 'form-title',
				inputBodyClass: 'form-group',
			},
		)
		userDataForm1.render('body')
		userDataForm1.$el.addEventListener('click', (e) => {
			if (e.target.tagName === 'INPUT')
				e.target.value = 0
		}
		)
	}
}










