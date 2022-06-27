/** 2я домашка по JS со звездочками:

1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
*/

for (let i = 1; i <= 10; i++) {
	console.log(2 ** i);
}

/** 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
*/

function riseToPowerOf(n) {
	for (let i = 1; i <= n; i++) {
		return 2 ** i;
	}
}

console.log(riseToPowerOf(10));

/** 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

let tmp = '';
for (let i = 0; i < 5; i++) {
	tmp += ':)';
	console.log(tmp);
}

/** 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)
*/

smiles('\u263a', 15);

function smiles(string, numberOfRows) {
	let str = string;
	console.log(string);
	for (let i = 0; i < numberOfRows - 1; i++) {
		str += string;
		console.log(str);
	}
}

/** 3 **.Написать функцию, которая принимает на вход слово.Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g.function getWordStructure(word)
В консоли:
Слово(word) состоит из(число) гласных и(число) согласных букв
	
Проверки: 'case', 'Case', 'Check-list'
*/

const getWord = (word) => {
	let vowels = /[aeiou]/gi;
	let consonants = /(?![aeiou])[a-z]/gi;
	let resultVow = word.match(vowels);
	let countVow = resultVow.length;
	let resultCons = word.match(consonants);
	console.log(resultCons)
	let countCons = resultCons.length;
	console.log('Слово ' + word + ' состоит из ' + countVow + 'гласных и ' + countCons + ' согласных букв')
}
getWord('case');
getWord('Case');
getWord('Check-list');

/**4 **.Написать функцию, которая проверяет, является ли слово палиндромом
e.g.function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

console.log(isPalindrom('abba'));
console.log(isPalindrom('garage'));
console.log(isPalindrom('Abba'));

function isPalindrom(word) {
	word = word.toUpperCase();
	for (let i = 0; i < word.length / 2; i++) {
		if (word[i] != word[word.length - 1]) {
			return false;
		}
		return true;
	}
}
