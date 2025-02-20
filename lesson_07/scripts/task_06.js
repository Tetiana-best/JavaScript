// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {
	function makeTabele(rows, columns) {
		document.write(`<table border = 1px>`)
		for (let rowNum = 1; rowNum <= rows; rowNum++) {
			for (let columnNum = 1; columnNum <= columns; columnNum++) {
				document.write(`<td class = "row">текст</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</table>
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
	makeTabele(5, 3)

}

