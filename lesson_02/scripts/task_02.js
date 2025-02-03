// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const birthYear = parseInt(prompt('Введіть Ваш рік народження'))
const currentYear = 2025
//1. Знаходимо результат
const yearAge = currentYear - birthYear
//2. Виводимо результат
document.write(`Вам: ${yearAge}`)