// Строгий режим
"use strict"

//0. Виводимо необхідні дані
const pricePerUnitProduct1 = parseFloat(prompt('Введіть вартість товару №1'))
const countProduct1 = parseInt(prompt('Введіть кількість одиниць товару №1'))
const pricePerUnitProduct2 = parseFloat(prompt('Введіть вартість товару №2'))
const countProduct2 = parseInt(prompt('Введіть кількість одиниць товару №2'))
const pricePerUnitProduct3 = parseFloat(prompt('Введіть вартість товару №3'))
const countProduct3 = parseInt(prompt('Введіть кількість одиниць товару №3'))
//1. Знаходимо результат
const totalCostProduct1 = ((pricePerUnitProduct1 * countProduct1).toFixed(2))
const totalCostProduct2 = ((pricePerUnitProduct2 * countProduct2).toFixed(2))
const totalCostProduct3 = ((pricePerUnitProduct3 * countProduct3).toFixed(2))
const totalCostAllProducts = (parseFloat(totalCostProduct1) + parseFloat(totalCostProduct2) + parseFloat(totalCostProduct3)).toFixed(2)

//2. Виводимо результат
document.write(`
		<style>
		.receipt {
					width: 300px;
					padding: 10px;
					border: 1px solid #000;
					background: rgb(255, 255, 255);
				}
				.receipt h2,
				h3,
				.adress {
					text-align: center;
					margin: 0;
					margin-block-end: 20px;
				}
				.line {
					border-top: 1px dashed #000;
					margin: 5px 0;
				}
				.item {
					display: flex;
					justify-content: space-between;
				}
				.total {
					font-weight: 900;
				}
			</style>
			<div class="receipt">
				<h2>КАССОВЫЙ ЧЕК</h2>
				<h3 class="title">ТОВ "Сільпо-Фуд"</h3>
				<div class="adress">магазин, м.Київ, вул.Сагайдачного, буд.41
				</div>
				<div>0003 Каса Бойко С.В.</div>
				<div class="line"></div>
				<div class="item"><span>Товар 1</span> <span>${totalCostProduct1}, грн</span></div>
				<div class="item"><span>Товар 2</span> <span>${totalCostProduct2}, грн</span></div>
				<div class="item"><span>Товар 3</span> <span>${totalCostProduct3}, грн</span></div>
				<div class="line"></div>
				<div class="item total"><span>РАЗОМ:</span> <span>${totalCostAllProducts}, грн</span></div>
				<div class="line"></div>
				<p style="text-align: center;">Дякуємо за покупку!</p>
			</div>
`)