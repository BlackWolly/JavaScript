/**
 *
 ->  1*:
 Преобразовать написанный код в 26-33 пунктах в функцию,
 принимающую на вход возраст.
 Пример: const checkAge = function(age) {
  Ваши преобразования
  }
 Вывести в консоль результат работы функции с возрастами 17, 18, 61
 */

const age = 17;
const age2 = 18;
const age3 = 60;

const checkAge = function (age) {
	if (age < age2) {
		console.log(`You don't have access cause your age is ${age}. It's less then `);
	} else if (age >= age2 && age < age3) {
		console.log('Welcome!');
	} else if (age > age3) {
		console.log('Keep calm and look Culture channel');
	} else {
		console.log('Technical work');
	}
}
checkAge(17);
checkAge(18);
checkAge(60);
checkAge(61);
checkAge('aaa');
checkAge('20');
checkAge('0');
checkAge('');