// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const NummberDayWeek = parseInt(prompt('Введіть, будь-ласка, номер дня тижня:'))

//1.  Знаходимо і виводимо результат
let dayWeek
switch (NummberDayWeek) {
	case 1: dayWeek = 'Понеділок.'
		break;
	case 2: dayWeek = 'Вівторок.'
		break;
	case 3: dayWeek = 'Середа.'
		break;
	case 4: dayWeek = 'Четвер.'
		break;
	case 5: dayWeek = 'П\'ятниця.'
		break;
	case 6: dayWeek = 'Субота.'
		break;
	case 7: dayWeek = 'Неділя.'
		break;
	default: dayWeek = 'Такого дня тижня не існує.'
		break;
}
document.write(`${dayWeek}`)