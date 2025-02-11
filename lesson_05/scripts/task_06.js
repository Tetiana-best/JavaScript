// Строгий режим
"use strict"


if (confirm('Почати тестування?')) {

	document.write(`<table border = 1px><tr>`)
	for (let columnNum = 1; columnNum <= 7; columnNum++) {
		document.write(`<td class = "row"> ${columnNum} </td>`)
	}
	document.write(`</tr></table>
			<style>
		.row {
		border-radius: 5px;
		color: blue;
		background-color: green;
		padding: 10px;
		letter-spacing: 1.3px;
		font-size: 36px;
		}
		</style>`)

}