// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// 	Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер).
	//  Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

	class Product {
		constructor(productTitle, companyTitle, companyRegNumber, count, unit) {
			this.ProductTitle = productTitle
			this.CompanyTitle = companyTitle
			this.CompanyRegNumber = companyRegNumber
			this.Count = count
			this.Unit = unit
		}
		#productTitle
		get ProductTitle() {
			return this.#productTitle
		}
		set ProductTitle(newProductTitle) {
			if (!newProductTitle)
				throw new Error(`<p class="text">Назва товару не може бути порожньою!</p>`)
			this.#productTitle = newProductTitle
		}
		#companyTitle
		get CompanyTitle() {
			return this.#companyTitle
		}
		set CompanyTitle(newCompanyTitle) {
			if (!newCompanyTitle)
				throw new Error(`<p class="text">Назва фірми виробника не може бути порожньою!</p>`)
			this.#companyTitle = newCompanyTitle
		}
		#companyRegNumber
		get CompanyRegNumber() {
			return this.#companyRegNumber
		}
		set CompanyRegNumber(newCompanyRegNumber) {
			if (!newCompanyRegNumber)
				throw new Error(`<p class="text">Назва реєстраційного номеру фірми виробника не може бути порожньою!</p>`)
			this.#companyRegNumber = newCompanyRegNumber
		}
		#count
		get Count() {
			return this.#count
		}
		set Count(newCount) {
			if (newCount === undefined || newCount < 0 || newCount === null || typeof newCount !== 'number')
				throw new Error(`<p class="text">Кількість товару повинна бути числом, не може бути порожньою або відємною ! </p>`)
			this.#count = newCount
		}
		#unit
		get Unit() {
			return this.#unit
		}
		set Unit(newUnit) {
			if (!newUnit || typeof newUnit !== 'string' || newUnit.trim() === '')
				throw new Error(`<p class="text">Одиниця виміру товару не може бути порожньою або числом ! </p>`)
			this.#unit = newUnit
		}
		toString() {
			return `<p class="text">${this.ProductTitle}  "${this.CompanyTitle}" (${this.CompanyRegNumber}): ${this.Count}, ${this.Unit} </p >`
		}
	}
	//----
	class Store {
		constructor(storeTitle) {
			this.StoreTitle = storeTitle
			this.productsList = []
		}
		// метод реестрації товару
		addProduct(newProd) {
			let isProd = this.productsList.find((prod) => prod.ProductTitle === newProd.ProductTitle &&
				prod.CompanyTitle === newProd.CompanyTitle && prod.CompanyRegNumber === newProd.CompanyRegNumber && prod.Unit === newProd.Unit)
			if (isProd) isProd.Count = isProd.Count + newProd.Count
			else this.productsList.push(newProd)
		}
		// метод відвантаження товару
		removeProduct(productToRemove) {
			this.productsList = this.productsList.filter(
				(prod) => prod.ProductTitle !== productToRemove
			)
		}
		// метод фільтрації за назвою товару
		isProductTitle(prtitle) {
			this.productsList = this.productsList.filter(product => product.ProductTitle === prtitle)
		}
		// метод фільтрації за назвою фірми
		isCompanyTitle(compTitle) {
			this.productsList = this.productsList.filter(product => product.CompanyTitle === compTitle)
		}
		// метод виводу на екран
		printProducts() {
			document.write(`<p class="text">${this.StoreTitle}</p >`)
			this.productsList.forEach((pr) => document.write(`${pr}`))
		}
	}

	//-----------
	const store = new Store('Таврія')
	store.addProduct(new Product('- Молоко', 'Молокія', 'UA54573', 50, 'л'))
	store.addProduct(new Product('- Кефір', 'Галичина', 'UA77841', 40, 'л'))
	store.addProduct(new Product('- Молоко', 'Ферма', 'UA90321', 25, 'шт'))
	store.addProduct(new Product('- Бублики', 'КиївХліб', 'UA55667', 30, 'шт'))
	store.addProduct(new Product('- Бублики', 'КиївХліб', 'UA55667', 45, 'шт'))
	store.addProduct(new Product('- Хліб', 'КиївХліб', 'UA99228', 90, 'шт'))
	store.addProduct(new Product('- Булка', 'КиївХліб', 'UA99228', 55, 'шт'))
	store.printProducts()
	// store.removeProduct('Кефір')
	// store.printProducts()
	// store.isProductTitle('Молоко')
	// store.printProducts()
	store.isCompanyTitle('КиївХліб')
	store.printProducts()


}