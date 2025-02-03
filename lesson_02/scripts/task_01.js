// Строгий режим
"use strict"
//0. Виводимо необхідні дані
const num1 = parseFloat(prompt('Введіть число №1'))
const num2 = parseFloat(prompt('Введіть число №2'))
//1. Знаходимо результат
const summNumbers = num1 + num2
const prodNumbers = ((num1 * num2).toFixed(2))
const divNumbers = ((num1 / num2).toFixed(2))
//2. Виводимо результат
document.write(`
			<table border = 1px>
				<tr>
					<th>Шуканий результат</th>
					<th>Отримане значення</th>
				</tr>
				<tr>
					<th>Сумма</th>
					<td>${summNumbers}</td>
				</tr>
				<tr>
					<th>Добуток(закруглено до 2 знаків пясля коми)</th>
					<td>${prodNumbers}</td>
				</tr>
				<tr>
					<th>Частка(закруглено до 2 знаків пясля коми)</th>
					<td>${divNumbers}</td>
				</tr>
			</table>`)