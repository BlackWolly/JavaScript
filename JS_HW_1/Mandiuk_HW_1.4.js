/**
-> 4***:
Преобразовать задание 3* таким образом, 
чтобы возраст вводится используя функцию prompt в привязанной верстке
- Для отображение изменений в реальном времени используем Live Server
- Сделаем, чтобы пользователь сам мог вводить какие-то значения 
внутри функции
- prompt - вызов диалогового окна из браузера
!!! ИЗ prompt ВСЕГДА ВОЗРАЩАЕТСЯ СТРОКА
- добавил alert'ы так читать из консоли неудобно, 
т.у. меняем console.log'и на alert'ы
*/

const age = 17;
const age2 = 18;
const age3 = 60;

const checkAge = function (age) {
	alert(`You have entered: ${age}`);
	if (age && !isNaN(age)) {
		if (age < age2) {
			alert(`You don't have access cause your age is ${age}. It's less then `);
		} else if (age >= age2 && age < age3) {
			alert('Welcome!');
		} else if (age > age3) {
			alert('Keep calm and look Culture channel');
		} else {
			alert('Technical work');
		}
	} else {
		alert('Not an integer value');
	}
}

let a = prompt('Enter your age');
checkAge(a);