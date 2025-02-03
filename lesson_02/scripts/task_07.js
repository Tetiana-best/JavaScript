// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const numMonthMin = 1
const numMonthMax = 12
const numDayMin = 0
const numDayMax = 6
//1. Знаходимо результат
const randNumMonth = numMonthMin + Math.floor((Math.random() * (numMonthMax - numMonthMin + 1)))
const randNumDay = numDayMin + Math.floor((Math.random() * (numDayMax - numDayMin + 1)))
const summDayMonth = parseInt(randNumMonth + randNumDay)

//2. Виводимо результат
document.write(`Випадковий номер місяця: ${randNumMonth} <br>
		Випадковий номер дня: ${randNumDay} <br>
		 Результат їх суми: ${summDayMonth}`)