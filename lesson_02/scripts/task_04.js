// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const length = parseInt(prompt('Введіть довжину у сантиметрах'))
const cmMeter = 0.01
const cmKilometer = 0.00001
//1. Знаходимо результат
const TotalMeters = ((length * cmMeter).toFixed(2))
const TotalKilometers = ((length * cmKilometer).toFixed(6))
//2. Виводимо результат
document.write(`В метрах це дорівнює: ${TotalMeters} м <br>
					В кілометрах це дорівнює: ${TotalKilometers} км `)