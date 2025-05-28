// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Завдання 9.
	// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати
	// скільки студентів з гуртка з історії також відвідують гурток з математики.Також підрахувати скільки всього студентів
	// відвідують хоча б один гурток.

	const mathClub = [
		"Петренко", "Іванчук", "Коваль", "Шевченко", "Ткаченко", "Бондар"
	];
	const historyClub = [
		"Шевченко", "Коваль", "Козак", "Мельник", "Ткаченко", "Сидоренко"
	];

	const setMathClub = new Set(mathClub)
	const setHistoryClub = new Set(historyClub)

	const mathAndHistoryClubInter = setMathClub.intersection(setHistoryClub)

	const mathAndHistoryClubUnion = new Set([...mathClub, ...historyClub])
	// const mathAndHistoryClubUnion = setMathClub.union(setHistoryClub)

	document.write(`<p class="text"> Гурток з математики: ${mathClub.join(',')}</p>`)
	document.write(`<p class="text"> Гурток з історії: ${historyClub.join(',')}</p><br><br>`)

	document.write(`<br><p class="text"> Кількість студентів, які відвідують і гурток з історії і гурток з математики: ${mathAndHistoryClubInter.size} студ.</p><br>`)

	document.write(`<p class="text"> Кількість студентів, які відвідують хоча б один гурток: ${mathAndHistoryClubUnion.size} студ.</p><br>`)

}

