// Строгий режим
"use strict"
// if (confirm('Почати тестування?')) {

// Завдання 2.
// Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна,
// кількість одиниць).Додати
// можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок
// «товар - загальна вартість»).

class Shop {
	constructor(shopList) {
		this.shopList = shopList
	}
	[Symbol.iterator]() {
		this.currentProductIndex = 0
		return this
	}
	next() {
		if (this.currentProductIndex < this.shopList.length) {
			const product = this.shopList[this.currentProductIndex++]
			return { done: false, value: `<p class="text">${product.title} - ${product.price * product.count} $</p>` }
		}
		return { done: true }
	}
}

let products = [
	{ id: 1, title: 'Milk', price: '30', count: 100 },
	{ id: 2, title: 'Bread', price: '25', count: 500 },
	{ id: 3, title: 'Apples', price: '12', count: 300 },
	{ id: 4, title: 'Cheese', price: '80', count: 400 },
	{ id: 5, title: 'Coffee', price: '100', count: 200 },
]

const shop = new Shop(products)
for (const el of shop) {
	document.write(el)
}
// console.log([...shop])
// }
