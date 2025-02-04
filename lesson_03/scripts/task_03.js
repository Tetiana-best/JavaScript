// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const numNumberMin = 1
const numNumberMax = 5
const tryingGuess1 = parseInt(prompt('За 2 спроби Вам треба вгадати число від 1 до 5. Отже перша спроба - введіть число:'))
const tryingGuess2 = parseInt(prompt('Невірно! Тепер друга спроба - введіть число від 1 до 5:'))

//1.  Знаходимо і виводимо результат
const randNum = numNumberMin + Math.floor((Math.random() * (numNumberMax - numNumberMin + 1)))
document.write(`Випадкове число ${randNum}.`)

if (tryingGuess1 === randNum) document.write(`Вітаємо!Ви вгадали з першої спроби`)
else tryingGuess2
if (tryingGuess2 === randNum) document.write(`Вітаємо! Ви вгадали з другої спроби!`)
else document.write(`Нажаль Ви не вгадали з другої спроби. Не засмучуйтесь - пощастить в коханні!`)

