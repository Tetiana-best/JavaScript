// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const driverCategoryName = prompt('Введіть, будь-ласка, назву категорії вашого водійського посвідчення в англійській розкладці великими літерами(А, В або С):')

//1.  Знаходимо і виводимо результат
let result
switch (driverCategoryName) {
	case 'A': result = 'Згідно Вашої категорії водійських прав, Вам дозволено керувати мотоциклом.'
		break;
	case 'B': result = 'Згідно Вашої категорії водійських прав, Вам дозволено керувати легковим автомобілем.'
		break;
	case 'C': result = 'Згідно Вашої категорії водійських прав, Вам дозволено керувати вантажним автомобілем.'
		break;
	default: result = 'Такої категрії прав не існує.'
		break;
}
document.write(`${result}`)