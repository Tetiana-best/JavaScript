// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. Об’єкт “Фірма” (використати члени-класи)
	// 	поля
	// назва фірми;
	// дата заснування(рік, місяць);
	// 	послуги(назва послуги, вартість, термін виконання);
	// адреси філіалів(країна, місто, вулиця, номер будинку);
	// 	методи
	// визначення кількості років існування фірми;
	// getCountOfYearsExistence
	// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
	// showOfServices
	// виведення всіх філіалів фірми у вказаному місті;
	// showAllBranchesInCity;

	class Company {
		constructor(nameCompany, establishmentMonthYear, totalServicesList, totalBranchesList) {
			this.NameCompany = nameCompany
			this.#establishmentMonthYear = establishmentMonthYear
			this.Services = totalServicesList
			this.BranchAddresses = totalBranchesList
		}
		// Назва фірми
		#nameCompany
		get NameCompany() {
			return this.#nameCompany
		}
		set NameCompany(newNameCompany) {
			if (!newNameCompany)
				throw new Error(`<p class="text">Назва фірми не може бути порожньою!</p>`)
			this.#nameCompany = newNameCompany
		}
		// Дата заснування
		#establishmentMonthYear
		get EstablishmentMonthYearCompany() {
			return this.#establishmentMonthYear
		}
		// Послуги
		#totalServicesList
		get Services() {
			return this.#totalServicesList
		}
		set Services(newServices) {
			if (newServices.length === 0)
				throw new Error(`<p class="text">Список послуг не може бути порожнім! </p>`)
			this.#totalServicesList = newServices
		}
		// Філіали
		#totalBranchesList
		get BranchAddresses() {
			return this.#totalBranchesList
		}
		set BranchAddresses(newBranchAddresses) {
			if (newBranchAddresses.length === 0)
				throw new Error(`<p class="text">Список філіалів не може бути порожнім!</p>`)
			this.#totalBranchesList = newBranchAddresses
		}
		// ------------------------------------------------------------------------------------------
		// метод визначення кількості років існування фірми;

		getCountYearsCompanyExistence() {
			const currentDate = {
				currentMonth: 4,
				currentYear: 2025,
			}
			if (this.EstablishmentMonthYearCompany.EstablishmentYear > currentDate.currentYear)
				throw new Error(`<p class="text">Поточний рік не може бути меншим за рік заснування!<br> </p>`)

			let countYearsCompanyExistence = currentDate.currentYear - this.EstablishmentMonthYearCompany.EstablishmentYear
			if (this.EstablishmentMonthYearCompany.EstablishmentMonth <= currentDate.currentMonth) return countYearsCompanyExistence
			else return countYearsCompanyExistence - 1
		}
		toString() {
			return `<p class="text">Фірма ${this.NameCompany} існує: ${this.getCountYearsCompanyExistence()} років.</p> `
		}
		// метод виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

		showOfServices(sumMoney, time) {

			const newArrService = this.Services.reduce((prevArr, service) => {
				if (sumMoney >= service.CostOfService && time >= service.CompletionTime) prevArr.push(service.toString());
				return prevArr;
			}, []);
			document.write(newArrService.join(''))
		}
		// метод виведення всіх філіалів фірми у вказаному місті;
		showAllBranchesInCity(city) {

			const newArrBranch = this.BranchAddresses.reduce((prevArr, branch) => {
				if (branch.City === city) prevArr.push(branch.toString());
				return prevArr;
			}, []);
			document.write(newArrBranch.join(''))
		}
	}

	class EstablishmentMonthYearCompany {
		constructor(establishmentMonth, establishmentYear) {
			this.EstablishmentYear = establishmentYear
			this.EstablishmentMonth = establishmentMonth
		}
		// Місяць
		#establishmentMonth
		get EstablishmentMonth() {
			return this.#establishmentMonth
		}
		set EstablishmentMonth(newEstablishmentMonth) {
			if (newEstablishmentMonth < 1 || newEstablishmentMonth > 12 || !newEstablishmentMonth)
				throw new Error(`<p class="text">Місяць не може бути менше за 1, більше за 12 або порожнім полем!<br> </p>`)
			this.#establishmentMonth = newEstablishmentMonth
		}
		// Рік
		#establishmentYear
		get EstablishmentYear() {
			return this.#establishmentYear
		}
		set EstablishmentYear(newEstablishmentYear) {
			if (newEstablishmentYear === 0 || !newEstablishmentYear)
				throw new Error(`<p class="text">Рік не може бути нульовим або порожнім полем!</p>`)
			this.#establishmentYear = newEstablishmentYear
		}
		// ------------------------------------------------------------------------------------------
		toString() {
			return `<p class="text">Дата заснування: ${this.EstablishmentMonth}.${this.EstablishmentYear}.</p> `
		}
	}

	class Services {
		constructor(serviceName, costOfService, completionTime) {
			// відкрите поле, просто створюємо додавши у this
			this.ServiceName = serviceName
			// захищене поле, використовуємо приватне поле(#) і setter
			this.CostOfService = costOfService
			// захищене поле, використовуємо приватне поле(#) і setter
			this.CompletionTime = completionTime
		}
		// назва послуги
		#serviceName
		get ServiceName() {
			return this.#serviceName
		}
		set ServiceName(newServiceName) {
			if (!newServiceName)
				throw new Error(`<p class="text">Назва послуги не може бути порожньою!</p>`)
			this.#serviceName = newServiceName
		}
		// вартість послуги
		#costOfService
		get CostOfService() {
			return this.#costOfService
		}
		set CostOfService(newCostOfService) {
			if (newCostOfService < 0)
				throw new Error(`<p class="text">Вартість послуги не може бути відємною! </p>`)
			this.#costOfService = newCostOfService
		}
		// термін виконання
		#completionTime
		get CompletionTime() {
			return this.#completionTime
		}
		set CompletionTime(newCompletionTime) {
			if (newCompletionTime <= 0)
				throw new Error(`<p class="text">Термін виконання не може бути відємним або дорівнюватись нулю! </p>`)
			this.#completionTime = newCompletionTime
		}
		// ------------------------------------------------------------------------------------------
		toString() {
			return `<p class="text">Послуга: ${this.ServiceName} вартістю ${this.CostOfService} грн може бути виконана за ${this.CompletionTime} хв.</p> `
		}
	}

	// -адреси філіалів(країна, місто, вулиця, номер будинку);

	class Branches {
		constructor(country, city, street, bildingNum) {
			this.Country = country
			this.City = city
			this.Street = street
			this.BildingNum = bildingNum
		}
		// країна
		#country
		get Country() {
			return this.#country
		}
		set Country(newCountry) {
			if (!newCountry)
				throw new Error(`<p class="text">Назва країни не може бути порожньою!</p>`)
			this.#country = newCountry
		}
		// місто
		#city
		get City() {
			return this.#city
		}
		set City(newCity) {
			if (!newCity)
				throw new Error(`<p class="text">Назва міста не може бути порожньою!</p>`)
			this.#city = newCity
		}
		// вулиця
		#street
		get Street() {
			return this.#street
		}
		set Street(newStreet) {
			if (!newStreet)
				throw new Error(`<p class="text">Назва вулиці не може бути порожньою!</p>`)
			this.#street = newStreet
		}
		// номер будинку
		#bildingNum
		get BildingNum() {
			return this.#bildingNum
		}
		set BildingNum(newBildingNum) {
			if (newBildingNum < 0 || !newBildingNum)
				throw new Error(`<p class="text">Номер будинку не може бути відємним або порожнім! </p>`)
			this.#bildingNum = newBildingNum
		}
		// -----------------
		toString() {
			return `<p class="text">Філіали фірми у місті ${this.City}: ${this.Country},${this.Street} ${this.BildingNum}.</p> `
		}
	}

	// ------------------------------------
	try {
		const EstablishmentMonthYearCompany1 = new EstablishmentMonthYearCompany(9, 2000);
		const servicesList = [
			new Services('Сleaning', 100, 60),
			new Services('Repair', 700, 30),
			new Services('Washing of windows', 500, 40),
		];
		const branchesList = [
			new Branches('Canada', 'Toronto', 'Queen St', 12),
			new Branches('Canada', 'Toronto', 'Bloor Str', 3),
			new Branches('Germany', 'Berlin', 'Unter den Linden', 5),
			new Branches('France', 'Paris', 'Champs-Élysées', 9),
			new Branches('France', 'Paris', 'Rue de Rivoli', 12),
		];
		const Company1 = new Company('Baby', EstablishmentMonthYearCompany1, servicesList, branchesList)
		document.write(Company1)
		Company1.getCountYearsCompanyExistence()
		Company1.showOfServices(700, 60)
		Company1.showAllBranchesInCity('Toronto')

	} catch (error) {
		document.write(error.message);
	}
	document.write(`<p class="text"><br>Гарного дня!</p>`)

}










