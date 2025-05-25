// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача №13. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
	// 		Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням
	// 		confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

	const initialTasks = [
		"Прочитати статтю про JavaScript",
		"Попрацювати над пет-проєктом",
		"Оптимізувати старий фрагмент коду",
		"Пройти один урок з TypeScript",
		"Перевірити оновлення на GitHub",
		"Написати тести до функції",
		"Розібратися з новою бібліотекою",
		"Подивитися відео про React",
		"Покращити верстку на сайті"
	]

	function getTasks() {
		let tasks = localStorage.getItem('todoList')
		if (!tasks) {
			localStorage.setItem('todoList', JSON.stringify(initialTasks))
			tasks = JSON.stringify(initialTasks)
		}
		return JSON.parse(tasks)
	}

	function saveTasks(tasks) {
		localStorage.setItem('todoList', JSON.stringify(tasks))
	}

	function deleteTask(index) {
		const tasks = getTasks()
		tasks.splice(index, 1)
		saveTasks(tasks)
		renderTasks()
	}

	function renderTasks() {
		const list = document.getElementById('taskList')
		if (!list) return
		list.innerHTML = ''
		const tasks = getTasks()
		for (const task of tasks) {
			const li = document.createElement('li')
			li.textContent = task
			list.appendChild(li)
		}
	}

	function askRandomTask() {
		const tasks = getTasks()
		const index = Math.floor(Math.random() * tasks.length)
		const task = tasks[index]

		const confirmed = confirm(`${task}`)
		if (confirmed) {
			deleteTask(index)
		}

		const currentTasks = getTasks()
		if (currentTasks.length === 0) {
			alert('Всі справи виконані! Час відпочити!')
		}
	}

	window.onload = () => {
		renderTasks();
		const tasks = getTasks()

		if (tasks.length === 0) {
			alert('Всі справи виконані! Час відпочити!')
			return
		}

		if (tasks.length > 0) {
			const intervalId = setInterval(() => {
				const currentTasks = getTasks()
				if (currentTasks.length === 0) {
					clearInterval(intervalId)
					return
				}
				askRandomTask()
			}, 3000)
		}
	}
}

