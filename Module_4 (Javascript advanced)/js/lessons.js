'use strict';

//* JSON (формат передачі даних на сервер)
// передача (POST) та отримання (GET) даних з сервера
// за допомогою JSON можна зробити "глибоке" клонування об'єкту (stringify > parse)

const depart = {
	company: 'Google',
	country: 'USA',
	people: 7000,
	ceo: {
		name: 'Jimm',
		old: 37
	}
};

const onServ = JSON.stringify(depart); // перетворює JS значення в JSON строчку (зрозуміле серверу)
const fromServ = JSON.parse(onServ); // перетворює  JSON строчку (зрозуміле серверу) в JS значення
const cloneObj = JSON.parse(JSON.stringify(depart)); // "глибоке" клонування
cloneObj.old = 40;
//console.log(onServ);
//console.log(fromServ);
//console.log(cloneObj);

//* AJAX (асинхроні запити до серверу - без перезавантаження сторінки)
// XMLHttpRequest (застарілий запит)

// Приклад з конвертером валют
const inputUAH = document.querySelector('#uah'), // отримуємо елементи (input)
	   inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => { // вішаємо обробник подій на input з типом input (будь-яка зміна в полі вводу)
	const request = new XMLHttpRequest(); // створюємо запит

	request.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'); // збираємо дані (що хочемо від серверу). 1. Отримати. 2. Шлях до серверу (може ще бути async, user, password)
	//request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // заголовок запросу (для коректного спілкування клієнт-сервер 1. Заголовок 2. Тип відправленого файлу (json))
	request.send(); // відправка запросу

	request.addEventListener('load', () => { // на запит вішкаємо обробник подій з типом load (коли відповідь повністю повернулась з серверу)
		if (request.status === 200) { // перевіряємо статус цієї відповіді 
			const res = JSON.parse(request.response); // те що повернув сервер (response) конвертуємо в звичайний JS об'єкт
			res.forEach(element => {
				if (element.cc === 'USD') {
					inputUSD.value = (+inputUAH.value / element.rate).toFixed(2);
				}
			});
			//inputUSD.value = (+inputUAH.value / res.current.usd).toFixed(2); // математичні дії в inputUSD. метод toFixed скорочує цифри після крапки.
		} else {
			inputUSD.value = `Error: ${request.status} ${request.statusText}`;
		}
	});
});

//* Promise 
// конструкція яка "обіцяє" щось зробити після успішного або не успішного запиту (працює з асинхроними функціями)

console.log('Запускаємо якусь дію...');

const prom = new Promise((resolve, reject) => { // створюємо новий екземпляр промісу за допомогою конструктуру. В аргументи конструктора передається 2 аргумента - вони являються функціями, які потрібно викликати якщо все ок (resolve), помилка (reject)
	setTimeout(() => { // наприклад створюємо асинхроний код який виконається через 2 сек
		console.log('Data transfer on server...');
		const company = {
			name: 'Google',
			city: 'Miami'
		};
		resolve(company); // викликаємо функцію якщо все ок (передаємо дані, які начебто повернулись з серверу для подальшого використання) 
	}, 2000);
	
});

prom.then((data) => { // створюємо "ланцюг" подій коли дані повернулись з серверу (виконуємо обіцянку)
	data.countWorker = 3000;
	return data;
}).then((data) => { // наступна дія якщо все ок і т.д.
	console.log(data);
}).catch(() => { // блок кода, якщо трапилась помилка то робимо якісь дії
	console.log('Some error');
}).finally(() => { // блок кода який виконається при будь-яких умовами чи resolve чи reject
	console.log('Finally');
});

// Приклад. Створюємо функцію яка повертає новий проміс в якому створена асинхрона подія setTimeout)
const someProm = (time) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
};

someProm(2000).then(() => { // запускаємо функцію та передаємо аргумент для setTimeout
	console.log('2000ms');
});
someProm(4000).then(() => { // запускаємо функцію та передаємо аргумент для setTimeout
	console.log('4000ms');
});

// Методи промисов
Promise.all([someProm(2000), someProm(4000)]).then(() => { // збирає всі проміси та виводить останній завершений 
	console.log('Last promise');
});

Promise.race([someProm(2000), someProm(4000)]).then(() => { // збирає всі проміси та виводить перший завершений 
	console.log('First promise');
});

//* Fetch запит
// Новіша технологія запитів на сервер в порівнянні з XMLHttpRequest. Fetch завжди повертає Promise

// GET метод (отримання даних на сервер)
fetch('https://jsonplaceholder.typicode.com//comments?postId=1') // URL сервера
	.then(response => response.json()) // відповідь трансформуємо з json об'єкту в звичайний Object
	.then(json => console.log(json)); // виводимо Object в консоль

// POST метод (відправка даних на сервер)
fetch('https://jsonplaceholder.typicode.com/posts', { // URL сервера та об'єкт з налаштуваннями
	method: 'POST', // вказуємо метод
	body: JSON.stringify({name: 'Jonh', old: 32}), // тіло нашого об'єкту переформатовуємо в JSON рядок (для сервера)
	headers: { // вказуємо заголовки
		'Content-type': 'application/json'
	}
})
	.then(response => response.json()) // відповідь трансформуємо з json об'єкту в звичайний Object
	.then(json => console.log(json)); // виводимо Object в консоль

//* Методи переборів масивів (додатково)
// Метод forEach тільки перебирає та нічого не повертає

// Filter (фільтрує всі елементи в масиві по заданому критерію та повертає НОВИЙ масив!)
const arrFil = ['Jonh', 'Anderson', 'Keyt', 'Holland'];
const resFil = arrFil.filter((name) => {
	return name.length < 5;
});
console.log(resFil);

// Map (перебирає всі елементи в масиві модифікуючи їх та повертає НОВИЙ масив!)
const arrMap = ['adMIn', 'User', 'paSSword'];
const resMap = arrMap.map((name) => {
	return name.toUpperCase();
});
console.log(resMap);

// Every/Some (чи всі елементи в масиві містять задану умову (true/false) / чи хоть один елементи в масиві містить задану умову (true/false))
const someArr = ['Kevin', 77, true, 'ManCity'];
const resEvery = someArr.every((name) => {
	return typeof(name) === 'number';
});
const resSome = someArr.some((name) => {
	return typeof(name) === 'number';
});
console.log(resEvery);
console.log(resSome);

// Reduce (перебираючи елементи в масиві та роблячи якісь математичні дії повертає одне значення)
const arrRed = [4, 11, 5, 7, 88, 101];
const resRed = arrRed.reduce((acc, cur) => { // acc - акумулятор з вихідним значення 0. При кожній ітерації додає наступний елемент (сur) до акамулятора
	return acc + cur;
});
console.log(resRed);

//Practice
const films = [
	{
		 name: 'Titanic',
		 rating: 9
	},
	{
		 name: 'Die hard 5',
		 rating: 5
	},
	{
		 name: 'Matrix',
		 rating: 8
	},
	{
		 name: 'Some bad film',
		 rating: 4
	}
];

function showGoodFilms(arr) {
	console.log(arr.filter(item => item.rating >= 8));
}
showGoodFilms(films);

function showListOfFilms(arr) {
	const res = [];
	arr.forEach((item) => res.push(item.name));
	return res.reduce((acc, cur) => `${acc}, ${cur}`);

	console.log(arr.reduce((acc, cur) => `${typeof(acc) == 'object' ? acc.name: acc}, ${cur.name}`));
}
showListOfFilms(films);

function setFilmsIds(arr) {
	return arr.map((item, i) => {
		item.id = i;
		return item;
	});
}
const transformedArray = setFilmsIds(films);
console.log(transformedArray);


function checkFilms(arr) {
	console.log(arr.every(film => film.id || film.id === 0 ? true : false));
}
checkFilms(transformedArray);

const funds = [
	{amount: 1400},
	{amount: 2400},
	{amount: 1000},
	{amount: 500},
	{amount: 10400},
	{amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(item => item.amount > 0).reduce((acc, cur) => (typeof(acc) == 'object' ? acc.amount : acc) + cur.amount);
	//console.log(summ);
};
getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
	return data.some(item => item.amount < 0) == true ? data.reduce((acc, cur) => (typeof(acc) == 'object' ? acc.amount : acc) + cur.amount) : getPositiveIncomeAmount(data);
	//if (summ) {
	//	return data.reduce((acc, cur) => (typeof(acc) == 'object' ? acc.amount : acc) + cur.amount);
	//} else {
	//	console.log('Error');
	//}
	//console.log(summ);
};
getTotalIncomeAmount(funds);

//* Async / Await - асинхроність функції

/* 1. Позначаємо функцію що вона буде працювати асинхроно
	2. Ставимо "флаги" де потрібно почекати відповіді
	3. Async / Await використовуються завжди в парі
	4. Весь код виконується справа на ліво. Якщо відповідь від сервера буде занадто довгою (або перефармативуання коду з json формату), код йде далі, в змінну запишеться не готова відповідь а undefined і далі помилка. Тому ми ставиво await флаги де потрібно почекати закінчення операції щоб не було помилки
*/
const fetcReq = async (url, data) => { // виносино запит на сервер в окрему функцію
	const res = await fetch(url, { // запит на сервер
		method: 'POST',
		body: data, 
		headers: {
			'Content-type': 'application/json'
		}
	});
	return await res.json();
};

//* Local Storage 
// Зберігає дані в локальному сховищі (на домені), навіть після перезагрузки або закритті сторінки. Має тип Object
localStorage.setItem('name', 'Ivan'); // встановлює ключ - значення
localStorage.getItem('name'); // отримує дані по ключу
localStorage.removeItem('name'); // видаляє дані по ключу
localStorage.clear(); // очищає localStorage

// Приклад на запис даних в LS, та перевірка його
const form = document.querySelector('.form'),
	btn = document.querySelector('.btn'),
	check = document.querySelector('.check');

// 1
if (localStorage.getItem('checked')) { // при заході на сайт перевіряємо чи є такий ключ в LS, якщо так то ставимо галочку в checkbox
	check.checked = true;
}

check.addEventListener ('change', () => { // навішуємо обробник подій на checkbox, коли він змінюється
	localStorage.setItem('checked', true); // записуємо дані в LS
});

// 2
btn.addEventListener('click', (e) => { // теж саме що у варіанті №1
	e.preventDefault();
	if (localStorage.getItem('bg')) {
		form.style.backgroundColor = '#fff';
		localStorage.removeItem('bg');
	} else {
		localStorage.setItem('bg', 'blue');
		form.style.backgroundColor = 'blue';
	}
});

//* RegExp (регулярні вирази)
// Регулярні вирази це шаблони, які використовуються для зіставлення послідовностей символів у рядках
/pattern/igm; // pattern - те що ми шукаємо / igm - флаги

/* Flags 
i - ігнорує регістр при порівнянні (зупиняється на першому знайденому символі)
g - глобальне порівняння
m - багатострочний режим
Символьні класи (основні)
\d - порівнює тільки цифри (\D - все крім цифр)
\w - порівнює тільки літери (\W - все крім літр)
\s - порівнює тільки пробіли (\S - все крім пробілів)
*/
const answ = prompt('Your name?');
const re = /./g; // регулярний вираз

console.log(answ.search(/e/g)); // метод в String (search) - шукає на відповідність
console.log(answ.replace(re, '*')); // метод в String (replace). Заміняємо символи за допомогою регулярного виразу
console.log(answ.match(/\D/g)); // метод в String (match). Повертає співпадаючі значення

//* Геттеры и сеттеры 
// Це властивості об'єкта - "властивості акцесори". Можна сказати що це семантичний цукор від більш стандартного типу властивості об'єкта - "властивості даних"
const person = {
	name: 'Jonh',
	age: 81,

	get agePerson() {
		return this.age;
	},

	set agePerson(num) {
		return this.age = num;
	}
};

console.log(person.agePerson);
console.log(person.agePerson = 57);

//* Інкапсуляція
// Контроль доступа до даних в одному компоненті (наприклад класс) від зовнішніх змін

function User (name, age) { // конструктор функції
	let userName = name; // доступ ззовні неможливий, зміна доступна тільки в конструкторі
	this.userAge = age; // доступ ззовні можливий

	this.say = function () { // метод
		console.log(`Імя користувача ${userName}, йому ${this.userAge} років`);
	};

	this.getName = function() { // метод для отримання змінної
		return userName;
	};
	this.setName = function(name) { // метод для доступу до внутрішньої змінної, щоб її змінити
		if (typeof name === 'string') {
			userName = name;
		} else {
			console.log('This not name!');
		}
	};
};

const pers = new User('Jonh', 81); // робимо екзмепляр функції

console.log(pers.say()); // викликаємо метод

console.log(pers.getName()); // за допомогою методу перевіряємо яке імя записано
console.log(pers.setName(34543)); // встановлюємо нове імя (але буде помилка так як в методі зробили умову)
pers.setName('Harry'); // встановлюємо нове імя

console.log(pers.say()); // викликаємо ще раз метод

class Person { // конструктор класу
	constructor (name, age) {
		//this.userName = name; // має доступ ззовні
		this._userName = name; // нижнє підкреслювання, щоб "сховати або не дати доступ ззовні" змінну. Негласне правило developers
		this.userAge = age;
	}

	say() {
		console.log(`Імя користувача ${this._userName} йому ${this.userAge} років`);
	}

	get name() {
		return this._userName;
	}

	set name (name) {
		if (typeof(name) === 'string') {
			this._userName = name;
		} else {
			console.log('Eror');
		}
	}
}

const human = new Person('Stive', 47);

human.say();
human.name = 99;
console.log(human.name);
human.name = 'James';
console.log(human.name);

//* Прийом модуль
// Слугують для чистоти глобального простору, тобто самодостатні, які не ссилаються наприклад на одні і тіж змінні які є в глобалі, а працюють тільки в собі. Модуль окрема частина якогось коду (наприклад калькулятор і тд який може бути в одному файлі з усім кодом (так не робиться) так і виноситись в окремий файл js).
const someVar = 22;

(function(){ // власний модуль зі своєю областью видимості
	const someVar = 30;
	console.log(someVar);
}());
console.log(someVar);

const moduleTest = (function(){ // власний модуль зі своєю областью видимості
	const privat = function () { // метод
		console.log('This private function');
	};

	return { // з анонімної функції повертаємо об'єкт з методом та передаємо в нього ссилку на анонімну функцію
		up: privat // створення методу
	};
}());

moduleTest.up();

//* модули ES6, CommonJS і Webpack ()
// CommonJS (старий варіант)
// Розбиваємо цілий проект на окремі модулі (окремий файл JS з назвою модуля some) в src папці JS
function some () { // наприклад функція калькулятор
	// code
}
module.exports = some; // робимо експорт цього модуля

// Створюємо головний файл script (куди будуть імпортуватись модуля)
window.addEventListener('DOMContentLoaded', () => {
	const some = require('//road'); // вказуємо шлях звідки витягуємо модуль
	some(); // викликаємо функцію (в середині модуля функція)
});

// ES6 module
const nums = 55,
		firstName = 'Jonh';

export {nums, firstName};

export default function sayHi () { // робимо експорт з модуля. Експорт робиться в кінці модуля!
	console.log('Hello');
}

import {nums, firstName, sayHi} from './module' // робимо імпорт з модуля в файл script

//Webpack (збираємо всі модулі разом)
/*
1. Встановлюємо npm пакети webpack
2. Робимо конфіг webpack де задаємо якісь налаштування
3. Запускаємо npx webpack
4. Він зібрав всі модулі та створив головний файл (bundle.js) який підключаємо в html
*/