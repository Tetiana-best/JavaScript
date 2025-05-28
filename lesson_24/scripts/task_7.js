// Строгий режим
'use strict'

if (confirm('Почати тестування?')) {

	// Завдання 7. 
	// Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та
	// кількість студентів кожного з курсів.

	const students = [
		{ name: "Іван Петренко", course: 1, faculty: "Філологія" },
		{ name: "Марія Іванчук", course: 2, faculty: "Фізика" },
		{ name: "Олег Коваленко", course: 1, faculty: "Математика" },
		{ name: "Катерина Сидоренко", course: 3, faculty: "Філологія" },
		{ name: "Юрій Шевченко", course: 2, faculty: "Фізика" },
		{ name: "Андрій Бондар", course: 1, faculty: "Математика" },
		{ name: "Ольга Ткаченко", course: 3, faculty: "Історія" },
		{ name: "Світлана Козак", course: 4, faculty: "Філологія" }
	];

	const resMap = new Map()
	for (const student of students) {
		const course = student.course
		if (course) {
			if (resMap.has(course)) resMap.set(course, resMap.get(course) + 1)
			else resMap.set(course, 1)
		}
	}

	document.write(`<p class="text"> Початковий масив:</p><br>`)
	students.forEach((student) => {
		document.write(`<p class="text"> ${student.name}, ${student.course} курс - факультет ${student.faculty} </p>`)
	});

	document.write(`<br><p class="text"> Рішення:</p><br>`)

	const studentsList = students.map((student) => student.faculty)
	document.write(`<p class="text"> Кількість різних факультетів: ${new Set(studentsList).size}</p><br>`)

	resMap.forEach((element, count) => {
		document.write(`<p class="text"> ${count} курс: ${element} студ.</p>`)
	});
}

