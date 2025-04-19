// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 3. Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
	// програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. 
	// Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. 
	// Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

	class Reminder {
		static countOfReminders = 0
		static messageReminder
		static stopIntervalId

		constructor(initialMessage, initialInterval) {
			if (Reminder.messageReminder) return Reminder.messageReminder
			this.interval = initialInterval
			this.message = initialMessage

			Reminder.messageReminder = this
		}
		displayReminder() {

			return Reminder.stopIntervalId = setInterval(() => {
				Reminder.countOfReminders++
				document.write(`<p class="text">${this.message}, нагадування було: ${Reminder.countOfReminders} раз.</p >`)
			}, this.interval)
		}

		// Методи зупинки таймера
		stopInterval() {
			clearInterval(Reminder.stopIntervalId)
			document.write(`<p class="text">Таймер зупинено!</p >`)
		}
		// Метод зміни повідомлення без зупинки таймера.
		changeMessage(newMessage) {
			this.message = newMessage
			document.write(`<p class="text">${this.message}`)
		}
	}
	const Reminder1 = new Reminder('Привіт.Ти впорався!', 4000)
	// document.write(Reminder1)
	Reminder1.displayReminder()
	// Reminder1.stopInterval()
	Reminder1.changeMessage('Гарної Пасхи!')

	// const Reminder2 = new Reminder('Ще раз не вийде!', 1000)
	// Reminder2.displayReminder()

}










