// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 5. 
	//Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для
	// кожного із авторів.

	const books = [
		{ title: "Місто", year: 1930, author: "Валер'ян Підмогильний", price: 150 },
		{ title: "Тигролови", year: 1944, author: "Іван Багряний", price: 200 },
		{ title: "Сад Гетсиманський", year: 1950, author: "Іван Багряний", price: 220 },
		{ title: "Камінний хрест", year: 1900, author: "Василь Стефаник", price: 130 },
		{ title: "Земля", year: 1902, author: "Ольга Кобилянська", price: 170 },
		{ title: "Повія", year: 1883, author: "Панас Мирний", price: 160 },
		{ title: "Невеличка драма", year: 1929, author: "Валер'ян Підмогильний", price: 140 }
	]
	const resMap = new Map()
	for (const book of books) {
		const author = book.author
		const price = book.price
		if (author) {
			if (resMap.has(author)) resMap.set(author, resMap.get(author) + price)
			else resMap.set(author, price)
		}
	}
	document.write(`<p class="text"> Початковий масив:</p><br>`)
	books.forEach((book) => {
		document.write(`<p class="text"> ${book.title}, ${book.year}, ${book.author} - ${book.price} грн</p>`)
	});

	document.write(`<br><p class="text"> Рішення:</p><br>`)
	resMap.forEach((element, price) => {
		document.write(`<p class="text"> ${price} - ${element} грн.</p>`)
	});

}

