// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	const stringArr = ['hello', 'world123', '38555888222', '32test32', 'abc', '42rocks', '55578', 'no digits here']
	document.write(`<p class="body-task__description"> Дано (масив): ${stringArr}</p>`)
	// document.write(`<p class="text"> Оригінальний масив ${string.join}</p>`)

	// Задача 1. Дано масив рядків.Вивести ті, у яких є цифри(використати метод test та регулярні вирази).

	const regex1 = /\d/
	const result1 = stringArr.filter(str => regex1.test(str))
	document.write(`<p class="text"> Задача 1. Дано масив рядків.Вивести ті, у яких є цифри(використати метод test та регулярні вирази)</p>`)
	document.write(`<p class="text"> Рішення: ${result1}</p><br>`)

	// Задача 2. Дано масив рядків.Вивести ті, у яких немає цифр.

	const regex2 = /\d/
	const result2 = stringArr.filter(str => !regex2.test(str))
	document.write(`<p class="text"> Задача 2. Дано масив рядків.Вивести ті, у яких немає цифр</p>`)
	document.write(`<p class="text"> Рішення: ${result2}</p><br>`)

	// Задача 3. Дано масив рядків.Вивести ті, у яких є голосні літери.

	const regex3 = /[a,e,i,o,u]/
	const result3 = stringArr.filter(str => regex3.test(str))
	document.write(`<p class="text"> Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери</p>`)
	document.write(`<p class="text"> Рішення: ${result3}</p><br>`)

	// Задача 4. Дано масив рядків.Вивести ті, у яких немає голосних літер.

	const regex4 = /[a,e,i,o,u]/
	const result4 = stringArr.filter(str => !regex4.test(str))
	document.write(`<p class="text"> Задача 4. Дано масив рядків.Вивести ті, у яких немає голосних літер</p>`)
	document.write(`<p class="text"> Рішення: ${result4}</p><br>`)

	// Задача 5. Дано масив рядків.Вивести ті, у яких є або цифра 1 або цифра 3.

	const regex5 = /[1|3]/
	const result5 = stringArr.filter(str => regex5.test(str))
	document.write(`<p class="text"> Задача 5. Дано масив рядків.Вивести ті, у яких є або цифра 1 або цифра 3.</p>`)
	document.write(`<p class="text"> Рішення: ${result5}</p><br>`)

	// -------------------------------------match----------------------------------------------------

	const string = 'У Марії 10 котів та 1 собака. Вони їдять 3 рази на день, граються 7 годин!'
	document.write(`<p class="body-task__description"> Дано(рядок): ${string}</p>`)

	// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

	const regex6 = /\d+/g
	const result6 = string.match(regex6)
	document.write(`<p class="text"> Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.</p>`)
	document.write(`<p class="text"> Рішення: ${result6}</p><br>`)

	// Задача 7. Дано рядок тексту.Знайти усі знаки пунктуації, які були використано.

	const regex7 = /[.,!?;:()-]/g
	const result7 = string.match(regex7)
	document.write(`<p class="text"> Задача 7. Дано рядок тексту.Знайти усі знаки пунктуації, які були використано.</p>`)
	document.write(`<p class="text"> Рішення: ${result7.join(" ")}</p><br>`)

	// Задача 8. Дано рядок тексту.Вивести усі складові, які розділені розділовими знаками.

	const regex8 = /[.,!?;:()-]/g
	const result8 = string.split(regex8)
	document.write(`<p class="text"> Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.</p>`)
	document.write(`<p class="text"> Рішення: ${result8}</p > <br>`)

	// -------------------------------------allRegex----------------------------------------------------

	// Задача 9. Дано рядок тексту.Перевірити, чи містить він дату у форматі dd.mm.yyyy(dd - день, mm - місяць, yyyy - рік).

	const stringWithDate = 'Марія отримала листа 15.05.2024, але відповіла лише 20.05.2024.'
	document.write(`<p class="body-task__description"> Дано(рядок): ${stringWithDate}</p>`)

	const regex9 = /\b\d{2}.\d{2}.\d{4}\b/
	const result9 = regex9.test(stringWithDate)

	document.write(`<p class="text"> Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy(dd - день, mm - місяць, yyyy - рік).</p>`)
	if (result9) document.write(`<p class="text"> Рішення: Рядок тексту містить дату у форматі дату у форматі dd.mm.yyyy </p><br>`)
	else document.write(`<p class="text"> Рішення: Рядок тексту НЕ містить дату у форматі дату у форматі dd.mm.yyyy </p><br>`)

	// Задача 10. Дано рядок тексту.Підрахувати кількість двоцифрових чисел у рядку.

	const stringWithDig = 'У Лесі було 3 олівці та 27 зошитів. Вона купила ще 14 наклейок у магазині.'
	document.write(`<p class="body-task__description"> Дано(рядок): ${stringWithDig}</p>`)

	document.write(`<p class="text"> Задача 10. Дано рядок тексту.Підрахувати кількість двоцифрових чисел у рядку.</p>`)

	const regex10 = /\b\d{2}\b/g
	const result10 = stringWithDig.match(regex10)
	if (result10) document.write(`<p class="text"> Рішення: Кількість двоцифрових чисел у рядку: ${result10.length}</p>`)

	// Задача 11. Визначити чи може бути рядок тексту номером банківської картки(приклад: «4142 - 3433 - 2323 - 3434»).Знайти усі такі номери.

	const cardText = 'Переказ на картку 4142 - 3433 - 2323 - 3434. Альтернатива: 4142-3433-2323-3434. Додаткові коди: 123-4567-89.'
	document.write(`<p class="body-task__description"> Дано(рядок): ${cardText}</p>`)

	document.write(`<p class="text"> Задача 11. Визначити чи може бути рядок тексту номером банківської картки(приклад: «4142 - 3433 - 2323 - 3434»).Знайти усі такі номери.</p>`)

	const regex11 = /\b\d{4} ?- ?\d{4} ?- ?\d{4} ?- ?\d{4}\b/g
	const result11 = cardText.match(regex11)

	document.write(`<p class="text"> Знайдені номери карток: ${result11}</p>`)

	// Задача 12. Дано адресу сайту.Визначити, чи є він урядовим(містить домен “gov”)

	const linkText = 'www.kmu.gov.ua'
	document.write(`<p class="body-task__description"> Дано(рядок): ${linkText}</p>`)

	document.write(`<p class="text"> Задача 12. Дано адресу сайту.Визначити, чи є він урядовим(містить домен “gov”).</p>`)

	const regex12 = /\.gov\./g
	const result12 = regex12.test(linkText)

	if (result12) document.write(`<p class="text"> Рішення: Сайт є урядовим</p>`)
	else document.write(`<p class="text"> Рішення: Сайт не є урядовим</p><br>`)

	// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення

	const message = 'У 2019 році стартував проєкт, у 2021 його продовжили, а в 2022 і 3024 провели масштабні зміни.'
	document.write(`<p class="body-task__description"> Дано(рядок): ${message}</p>`)

	document.write(`<p class="text"> Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення.</p>`)

	const regex13 = /\b([3-9]\d{3}|2[1-9]\d\d|20[3-9]\d|202[2-9])\b/g
	const result13 = message.match(regex13)

	document.write(`<p class="text"> Усі роки після 2021 року: ${result13}</p><br>`)


	// Задача 14. Дано номер телефону.Перевірити, чи є цей телефон телефоном з України(починаєтсья на «+38»)

	const phoneText = '+380503845566'
	document.write(`<p class="body-task__description"> Дано(рядок): ${phoneText}</p>`)

	document.write(`<p class="text"> Задача 14. Дано номер телефону.Перевірити, чи є цей телефон телефоном з України(починаєтсья на «+38»).</p>`)

	const regex14 = /^\+38/
	const result14 = regex14.test(phoneText)

	if (result14) document.write(`<p class="text"> Рішення: цей телефон з України</p><br>`)
	else document.write(`<p class="text"> Рішення: цей телефон не з України</p><br>`)

	// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.

	const name = 'Іванов Петр Петрович'
	document.write(`<p class="body-task__description"> Дано(рядок): ${name}</p>`)

	document.write(`<p class="text"> Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.</p>`)

	const regex15 = /\s+/g
	const result15 = name.replace(regex15, '-')

	document.write(`<p class="text">${result15}</p><br>`)

	// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день / місяць / рік»

	const date = '14.05.2025'
	document.write(`<p class="body-task__description"> Дано(рядок): ${date}</p>`)

	document.write(`<p class="text"> Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день / місяць / рік».</p>`)

	const regex16 = /\./g
	const result16 = date.replace(regex16, '/')

	document.write(`<p class="text">${result16}</p><br>`)

	// Задача 17. Користувач вводить день(номер дня(0 - 6) або «sun, mon, tue, wed, thu, fri, sat»).Визначити, чи  є це день вихідним

	const weekDay = 'sun'
	document.write(`<p class="body-task__description"> Дано(рядок): ${weekDay}</p>`)

	document.write(`<p class="text"> Задача 17. Користувач вводить день(номер дня(0 - 6) або «sun, mon, tue, wed, thu, fri, sat»).
	Визначити, чи  є це день вихідним.</p>`)

	const regex17Weekand = /^(0|6|sun|sat)$/i
	const regex17Workday = /^(1|2|3|4|5|mon|tue|wed|thu|fri)$/i
	const result17Weekand = regex17Weekand.test(weekDay)
	const result17Workday = regex17Workday.test(weekDay)

	if (result17Weekand) document.write(`<p class="text"> Рішення: Цей день є вихідним.</p><br>`)
	else if (result17Workday) document.write(`<p class="text"> Рішення: Цей день робочий.</p><br>`)
	else document.write(`<p class="text"> Рішення: введіть коректний номер або день тижня</p><br>`)

}

