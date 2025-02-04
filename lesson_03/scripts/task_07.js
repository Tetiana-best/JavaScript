// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const NummberMonth = parseInt(prompt('Введіть, будь-ласка, номер місяця:'))

//1 Варіант.  Знаходимо і виводимо результат
let season
switch (NummberMonth) {
	case 1:
	case 2:
	case 3:
		season = 'Це Зима.'
		break;
	case 4:
	case 5:
	case 6:
		season = 'Це Весна.'
		break;
	case 7:
	case 8:
	case 9:
		season = 'Це Літо.'
		break;
	case 10:
	case 11:
	case 12:
		season = 'Це Осінь.'
		break;
	default: season = 'Такого номера місяця не існує. Існує всього 12 місяців!'
		break;
}
document.write(`${season}`)

/*
//2 Варінт.  Знаходимо і виводимо результат
if (1 <= NummberMonth && NummberMonth <= 3) document.write(`Це Зима.`)
else if (4 <= NummberMonth && NummberMonth <= 6) document.write(`Це Весна.`)
else if (7 <= NummberMonth && NummberMonth <= 9) document.write(`Це Літо.`)
else if (10 <= NummberMonth && NummberMonth <= 12) document.write(`Це Осінь.`)
else document.write(`Такого номера місяця не існує.`)
*/



