// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const agePerson = parseInt(prompt('Введіть, будь-ласка, Ваш вік:'))
const ageChildMax = 5
const ageSchoolChildMax = 18
const ageStudentMax = 24
const ageWorkerdMax = 59
const agePensionerMax = 150

//1.  Знаходимо і виводимо результат
if (agePerson <= ageChildMax) document.write(`Ви дитина в садочку.`)
else if (agePerson <= ageSchoolChildMax) document.write(`Ви школяр.`)
else if (agePerson <= ageStudentMax) document.write(`Ви студент.`)
else if (agePerson <= ageWorkerdMax) document.write(`Ви працівник.`)
else if (agePerson <= agePensionerMax) document.write(`Ви пенсіонер.`)
else document.write(`На жаль Вас вже немає з нами(.`)
