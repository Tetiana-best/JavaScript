// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const numSeconds = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби'))
const numSecondsMinutes = 60
const numSecondsInHour = 3600
// const numMinutesHour = 60
//1. Знаходимо результат
const totalHour = (Math.floor(numSeconds / numSecondsInHour))
const totalMinuts = (numSeconds / numSecondsMinutes) % 60

//2. Виводимо результат
document.write(`Це: ${totalHour} год. ${totalMinuts} хв.`)