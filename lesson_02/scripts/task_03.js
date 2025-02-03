// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const unitPrice = parseInt(prompt('Введіть вартість одиниці товару'))
const productQuantity = parseFloat(prompt('Введіть кількість товару'))
const vatRate = 0.05
//1. Знаходимо результат
const TotalPrice = ((unitPrice * productQuantity).toFixed(2))
const vatPrice = ((TotalPrice * vatRate).toFixed(2))
//2. Виводимо результат
document.write(`Загальна вартість товару: ${TotalPrice} ,грн<br>
			ПДВ: ${vatPrice}, грн`)