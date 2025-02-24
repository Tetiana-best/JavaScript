// Строгий режим
"use strict"
if (confirm('Почати тестування?')) {

	function getRandomArr(countElArray) {
		const arr = []
		for (let i = 0; i < countElArray; i++) {
			const minValueArray = -500, maxValueArray = 500
			let randomElemArray = minValueArray + Math.floor(Math.random() * (maxValueArray - minValueArray + 1))
			arr.push(randomElemArray)
		}
		return arr
	}

	const newArray = getRandomArr(7)

	function summWin(elArray) {
		let sumTotalWinn = 0
		while (true) {
			let userElArray = parseInt(prompt(`Введіть номер елемента від 0 до 6. якщо не хочете більше вводити натисніть Cancel`))
			if (isNaN(userElArray)) break
			sumTotalWinn += elArray[userElArray]
		}
		return sumTotalWinn
	}
	document.write(`<p class="text">Масив, у якому зберігається виграшна сума: ${newArray}.</p> 
					 <p class="text">Ваша сума виграшу склала: ${summWin(newArray)} грн</p>`)

}







