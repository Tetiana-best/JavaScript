// Строгий режим
'use strict'

if (confirm('Почати тестування?')) {

	// Завдання 5. 
	// Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти
	// найстаршого студента).

	const studentsList = [
		{ name: 'Ben', birthDate: '12.03.2004' },
		{ name: 'Ivan', birthDate: '25.07.2003' },
		{ name: 'Olga', birthDate: '03.11.2005' },
		{ name: 'John', birthDate: '18.01.2002' }
	]

	function parseBirthDate(dateString) {
		const [day, month, year] = dateString.split('.').map(part => parseInt(part, 10))
		return new Date(year, month - 1, day)
	}

	function findOldestStudent(ObjListStudents) {
		let oldestBirthDateOfStudent = Infinity
		let oldestStudent
		for (const student of ObjListStudents) {
			let studentDate = parseBirthDate(student.birthDate).getTime()
			if (studentDate < oldestBirthDateOfStudent) {
				oldestBirthDateOfStudent = studentDate
				oldestStudent = student
			}
		}
		return `${oldestStudent.name}`
	}
	document.write(`<p class="text"> Найстарший студент: ${findOldestStudent(studentsList)}</p>`)

}

