// Строгий режим
"use strict"


if (confirm('Почати тестування?')) {

	for (let countProduct = 1; countProduct <= 10; countProduct++) {
		document.write(`<p class="product-name">Product№${countProduct} <input type="text"></input><p> 
		<style>
		.product-name {
		//margin-block-end: 10px;
		// border-radius: 5px;
		// box-shadow: 5px 5px -2px black;
		color: blue;
		// background-color: blue;
		// padding: 10px 20px;
		letter-spacing: 1.3px;
		font-size: 20px;
		}
		</style>`)
	}
}