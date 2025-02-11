// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	let countCellTable = 0
	for (let i = 1; i <= 3; i++) {
		document.write(`<div class = "tables">`)
		document.write(`<table border = 1px>`)
		for (let rowNum = 1; rowNum <= 3; rowNum++) {
			document.write(`<tr>`)

			for (let columnNum = 1; columnNum <= 3; columnNum++) {
				countCellTable++
				document.write(`<td class = "row"> ${countCellTable} </td>`)
			}
			document.write(`</tr>`)
			document.write(`</div>`)
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
		.tables{
		display: flex;
		gap:30px;
		}
		</style>`)
	}

}









