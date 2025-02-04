// Строгий режим
"use strict"
//0. Виводимо необхідні дані
const nameFirstChild = prompt('Введіть ім\'я першої дитини')
const numCandyFirstChild = parseInt(prompt('Введіть кількість цукерок в першої дитини'))

const nameSecondChild = prompt('Введіть і\'мя другої дитини')
const numCandySecondChild = parseInt(prompt('Введіть кількість цукерок в другої дитини'))
//1. Знаходимо і виводимо результат
if (numCandyFirstChild > numCandySecondChild) document.write(`${nameFirstChild}`)
else if (numCandyFirstChild === numCandySecondChild) document.write(`Кількість цукерок в дітей однакова`)
else document.write(`${nameSecondChild}`)