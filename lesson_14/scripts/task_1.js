// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let webSeiteData = [
		{
			companyTitle: 'webWorld',
			ownerCompany: 'benNik',
			sponsorsArr: [
				{
					lastNameSponsor: 'gladiator',
					firstNameSponsor: 'max',
					sponsorInvestAmount: 70000,
				},
				{
					lastNameSponsor: 'steel',
					firstNameSponsor: 'john',
					sponsorInvestAmount: 50000,
				}
			],
			yearSiteRelease: 2025,
			costOfWebseite: 3000,
		},
		{
			companyTitle: 'netTech',
			ownerCompany: 'alexSoft',
			sponsorsArr: [
				{
					lastNameSponsor: 'harrison',
					firstNameSponsor: 'luke',
					sponsorInvestAmount: 100000,
				},
				{
					lastNameSponsor: 'white',
					firstNameSponsor: 'emma',
					sponsorInvestAmount: 80000,
				}
			],
			yearSiteRelease: 2030,
			costOfWebseite: 5000,
		},
		{
			companyTitle: 'cyberNet',
			ownerCompany: 'novaGroup',
			sponsorsArr: [
				{
					lastNameSponsor: 'smith',
					firstNameSponsor: 'oliver',
					sponsorInvestAmount: 50000,
				},
				{
					lastNameSponsor: 'johnson',
					firstNameSponsor: 'mia',
					sponsorInvestAmount: 60000,
				}
			],
			yearSiteRelease: 2008,
			costOfWebseite: 10500,
		}
	]

	// ----1.Загальна вартість усіх сайтів
	const totalCostWebseite = webSeiteData.reduce((prevTotalSum, { costOfWebseite }) => prevTotalSum + costOfWebseite, 0)
	document.write(`<p class="text">1. Загальна вартість усіх сайтів: ${totalCostWebseite}</p>`)

	// ----2.Кількість сайтів, що було зроблено між 2000 та 2009 рр.
	function countWebseiteFrom2000To2009(listWebSeiteData, startYear, endYear) {
		return listWebSeiteData.reduce((prevCountWebseite, { yearSiteRelease }) =>
			yearSiteRelease > startYear && yearSiteRelease < endYear ? prevCountWebseite + 1 : prevCountWebseite, 0)
	}
	document.write(`<p class="text">2. Кількість сайтів, зроблених між 2000 та 2009 рр: ${countWebseiteFrom2000To2009(webSeiteData, 2000, 2009)}</p>`)

	// ----3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	function countWebseiteSponsorInvestAmountMore100000(listWebSeiteData, investAmount) {
		return listWebSeiteData.reduce((prevTotalCount, { sponsorsArr }) =>
			sponsorsArr.reduce((prevSum, { sponsorInvestAmount }) => prevSum + sponsorInvestAmount, 0) > investAmount ? prevTotalCount + 1 : prevTotalCount, 0)
	}
	document.write(`<p class="text">3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${countWebseiteSponsorInvestAmountMore100000(webSeiteData, 100000)}</p>`)

	// ----4. Створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)

	const sponsorsTitle = webSeiteData.reduce((prevArr, { sponsorsArr }) => {
		sponsorsArr.forEach((sponsor) => prevArr.push(sponsor))
		return prevArr
	}, [])
	console.log(sponsorsTitle);
	document.write(`<p class="text">4. Загальний список усіх спонсорів виведено у консоль</p>`)

	// ----5. Знайти рік, коли прибуток був найбільшим

	function getYearMaxProfit(listWebSeiteData) {
		let maxProfit = -Infinity
		let yearMaxProfit
		for (const { sponsorsArr, yearSiteRelease } of listWebSeiteData) {
			const totalSponsorInvestAmount = sponsorsArr.reduce((prevSum, { sponsorInvestAmount }) => prevSum + sponsorInvestAmount, 0)
			if (totalSponsorInvestAmount > maxProfit) {
				maxProfit = totalSponsorInvestAmount
				yearMaxProfit = yearSiteRelease
			}
		}
		return yearMaxProfit
	}
	document.write(`<p class="text">5. У ${getYearMaxProfit(webSeiteData)} році прибуток був найбільшим`)

	// ----6. Упорядкувати список за спаданням прибутку

	webSeiteData.sort((webSeite1, webSeite2) => webSeite2.costOfWebseite - webSeite1.costOfWebseite)
	console.log(webSeiteData);
	document.write(`<p class="text">6. Упорядкований список за спаданням прибутку виведено у консоль</p>`)

	// ----7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
	function createSeiteCostLess10000(listWebSeiteData, maxCost) {
		return listWebSeiteData.filter((webseite) => webseite.costOfWebseite < maxCost)
	}
	console.log(createSeiteCostLess10000(webSeiteData, 10000));

	function createSeiteCostMore10000(listWebSeiteData, minCost) {
		return listWebSeiteData.filter((webseite) => webseite.costOfWebseite > minCost)
	}
	console.log(createSeiteCostMore10000(webSeiteData, 10000));

	document.write(`<p class="text">7. 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000 виведено у консоль</p>`)

}

