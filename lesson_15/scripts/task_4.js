// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// 	Розробити клас Baner
	// 	Поля
	// Масив об’єктів(графічних зображень та посилань на сайти)


	// 	методи
	// Метод випадкового вибору об’єкта(графічного зображення та посилання)
	// Метод виведення випадкового банера

	const initialBannerList = [
		{
			imageUrl: '../img/1.webp',
			link: 'https://www.google.com/'
		},
		{
			imageUrl: '../img/2.webp',
			link: 'https://www.google.com/'
		},
		{
			imageUrl: '../img/3.webp',
			link: 'https://www.google.com/'
		}
	]

	class Banner {
		constructor(initialBannerList) {
			this.bannerList = initialBannerList
		}
		getRandomObject() {
			let randomIndex = Math.floor(Math.random() * this.bannerList.length)
			return this.bannerList[randomIndex]
		}
		showRandomBanner() {
			const randomBanner = this.getRandomObject()
			return document.write(`<a href="${randomBanner.link}"><img src="${randomBanner.imageUrl}" style="width:300px;"></a>`)
		}
	}

	const banner1 = new Banner(initialBannerList)
	banner1.showRandomBanner()
	console.log(banner1);
}
