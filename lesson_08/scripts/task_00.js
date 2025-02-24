// Строгий режим
"use strict"


//остання цифра числа num=327      num%10  =7
//позбутися останньої цифри - націло поділити на 10 - num = Math.floor(num/10)
let num = 2679328725
//1)Відкидаємо з кінця цифри поки не відкинемо  7
let c
do {
	c = num % 10
	num = Math.floor(num / 10)
} while (c !== 7)
//додаємо цифри поки не зустрінемо 7
let s = 0
c = 0
do {
	s += c
	c = num % 10
	num = Math.floor(num / 10)
} while (c !== 7)

document.write(` ${s}`)