// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const productPrice = parseFloat(prompt('Введіть ціну товару'))
const sumMoney = parseFloat(prompt('Введіть скільки всього грошей у Вас є'))
const delta = sumMoney - productPrice
const loterry = 4

//1. Знаходимо і виводимо результат
if (sumMoney < productPrice) document.write(`Вам відмовлено в покупці`)
else if (loterry <= delta) document.write(`Успішна покупка!Ми пропонуємо Вам додатково ще купити лотерею за 4 грн`)
else if (productPrice <= sumMoney < (productPrice + delta)) document.write(`Успішна покупка, але на жаль Вам не вистачає на лотерею.`)

