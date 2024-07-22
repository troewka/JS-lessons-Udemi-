'use strict';


const personalMovieDB = { // Створюємо об'єкт
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?'); //Питання юзера записуємо в зміну
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
	},
	queshionOfFilms: function() {
		for(let i = 0; i < 2; i++) {
			const lastMovies = prompt('Один из последних фильмов?'); // Питання юзера записуємо в зміну
			const ratingMovies = +prompt('Оценка фильма?'); // Питання юзера записуємо в зміну
			if(lastMovies != null && ratingMovies != null && lastMovies != '' && ratingMovies != '' && lastMovies.length < 50) {
				console.log('done');
				personalMovieDB.movies[lastMovies] = ratingMovies;
			} else {
				console.log('eror');
				i--;
			}
		}
	},
	userLevel: function() {
		if(personalMovieDB.count < 10) {
			console.log('Small films');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Normal films');
		}	else if (personalMovieDB.count >= 30) {
			console.log('You watch many films');
		} else {
			console.log('some error');
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) { // Приходить логічний оператор з privat = true (перевіряємо значення)
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function(hidden) { 
		if(!hidden) {
			console.log(personalMovieDB);
		} else {
			console.log('База закрита');
		}
	},
	writeYourGenres: function() {
		for(let i = 1; i < 4; i++) {
			const yourLikeGenres = prompt(`Ваш юлюблений жанр під номером ${i}`);
			if (yourLikeGenres != null && yourLikeGenres != '') {
				personalMovieDB.genres.push(yourLikeGenres);
			} else {
				console.log('error');
				i--;
			}	
		}
		personalMovieDB.genres.forEach(function(item, index) {
			console.log(`Улюблений жанр під №${index + 1} - це ${item}`);
		}); 
	}
};
//personalMovieDB.start();
//personalMovieDB.queshionOfFilms();
//personalMovieDB.userLevel();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();
//personalMovieDB.writeYourGenres();


//=====================================================================================================//


//* TRAINING //
//personalMovieDB.movies[lastMovies] = ratingMovies; // Записуємо дані від юзера в об'єкт personalMovieDB [ключ] = значення
//personalMovieDB.movies[lastMovies] = ratingMovies; // Записуємо дані від юзера в об'єкт personalMovieDB [ключ] = значення

//let num = 0;

//do {
//	const lastMovies = prompt('Один из последних фильмов?'); // Питання юзера записуємо в зміну
//	const ratingMovies = +prompt('Оценка фильма?'); // Питання юзера записуємо в зміну
//	if(lastMovies != null && ratingMovies != null && lastMovies != '' && ratingMovies != '' && lastMovies.length < 50) {
//		console.log('done');
//		personalMovieDB.movies[lastMovies] = ratingMovies;
//		num++;
//	} else {
//		console.log('eror');
//		num--;
//	}
//	if(personalMovieDB.count < 10) {
//		console.log('Small films');
//	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//		console.log('Normal films');
//	}	else if (personalMovieDB.count >= 30) {
//		console.log('You watch many films');
//	} else {
//		console.log('some error');
//	}
//}
//while(num < 2);

//while(num < 2) {
//	const lastMovies = prompt('Один из последних фильмов?'); // Питання юзера записуємо в зміну
//	const ratingMovies = +prompt('Оценка фильма?'); // Питання юзера записуємо в зміну
//	if(lastMovies != null && ratingMovies != null && lastMovies != '' && ratingMovies != '' && lastMovies.length < 50) {
//		console.log('done');
//		personalMovieDB.movies[lastMovies] = ratingMovies;
//		num++;
//	} else {
//		console.log('eror');
//		num--;
//	}
//	if(personalMovieDB.count < 10) {
//		console.log('Small films');
//	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//		console.log('Normal films');
//	}	else if (personalMovieDB.count >= 30) {
//		console.log('You watch many films');
//	} else {
//		console.log('some error');
//	}
//}



//1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

//2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

//3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

//for(let i = 5; i < 11; i++) {
//	console.log(i);
//}

//for(let i = 20; i > 9; i--) {
//	if(i === 13) {
//		break;
//	}
//	console.log(i);
//}

//for(let i = 1; i < 11; i++) {
//	if(i % 2 === 0) {
//		console.log(i);
//	}
//}


//for (let i = 2; i <= 16; i++) {
//	if (i % 2 === 0) {
//		 continue;
//	} else {
//		 console.log(i);
//	}
//}

//let i = 2;

//while(i <= 16) {
//	if (i % 2 === 0) {
//		i++;
//		continue;
//	} else {
//		console.log(i);
//		i++;
//	}
//}

//const arrayOfNumbers = [];

//for(let i = 5; i < 11; i++) {
//	arrayOfNumbers.push(i);
//	console.log(i);
//}

//console.log(arrayOfNumbers);

//const arr = [3, 5, 8, 16, 20, 23, 50];
//const result = [];

//for(let i = 0; i < arr.length; i++) {
//	result[0 + i] = arr[i];
//	console.log(arr[i]);
//}
//console.log(result);

//function secondTask2() {
//	const data = [5, 10, 'Shopping', 20, 'Homework'];

//	for(let i = 0; i < data.length; i++) {
//		if((typeof data[i]) === 'number') {
//			data[i] = data[i] * 2;
//		}
//		else if((typeof data[i]) === 'string') {
//			data[i] = `${data[i]} - done`;
//		}
//	}
//	console.log(data);
//	return data;
//}
//secondTask2();

//function secondTask() {
//	const data = [5, 10, 'Shopping', 20, 'Homework'];

//	for (let i = 0; i < data.length; i++) {
//		 if (typeof(data[i]) === 'number') {
//			  data[i] = data[i] * 2;
//		 } else if (typeof(data[i]) === 'string') {
//			  data[i] = `${data[i]} - done`;
//		 }
//	}

//	console.log(data);
//	return data;
//}

//secondTask();


//function sayHello(name) {
//	return 'Привет, ' + name;
//}

//console.log(sayHello('Антон!'));

//function returnNeighboringNumbers(num) {
//	let arr = [];
//	for(let i = 0; i < 3; i++) {
//		if(i < 1) {
//			const res = num - 1;
//			arr.push(res);
//		} else if (i == 1) {
//			arr.push(num);
//		} else if(i > 1) {
//			const res = num + 1;
//			arr.push(res);
//		}
//	}
//	return arr;
//}

//console.log(returnNeighboringNumbers(23));


//function getMathResult(a, b) {
//	let str ='';
//	let sum;

//	if((typeof b) !== 'number' || b <= 0) {
//		return a;
//	}

//	for(let i = 1; i <= b; i++) {
		 
//		if (i == b) {
//			sum = a * i;
//			str += sum;
//		} else {
//			sum = a * i + '---';
//			str += sum;
//		}
//	}
//	return str;
//}

//console.log(getMathResult(8, 3));


//const sumStr = 'Gena Shemet';

//console.log(sumStr.slice(5, 9));

//console.log(sumStr.indexOf('q'));

//const nums = '20px';

//console.log(parseInt(nums));


//function calculateVolumeAndArea(num) {
//	if(typeof num == 'string' || num <= 0 || !Number.isInteger(num)) {
//		return 'При вычислении произошла ошибка';
//	} else {
//		let square = 6 * (num * num);
//		let volume = num * num * num;
//		return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
//	}
//}

//console.log(calculateVolumeAndArea(5));


//function getCoupeNumber(num) {
//	if(typeof num != 'number' || num < 0 || !Number.isInteger(num)) {
//		return 'Ошибка. Проверьте правильность введенного номера места';
//	} else if(num == 0 || num > 36) {
//		return 'Таких мест в вагоне не существует';
//	} else if(num > 0 && num <= 4) {
//		return 1;
//	} else if(num > 4 && num <= 8) {
//		return 2;
//	} else if(num > 8 && num <= 12) {
//		return 3;
//	} else if(num > 12 && num <= 16) {
//		return 4;
//	} else if(num > 16 && num <= 20) {
//		return 5;
//	} else if(num > 20 && num <= 24) {
//		return 6;
//	} else if(num > 24 && num <= 28) {
//		return 7;
//	} else if(num > 28 && num <= 32) {
//		return 8;
//	} else if(num > 32 && num <= 36) {
//		return 9;
//	}
//};

//console.log(getCoupeNumber(0));


//function getTimeFromMinutes(minuts) {
//	let hours = minuts / 60;
//	let min = minuts % 60;

//	if	(typeof minuts != 'number' || minuts < 0 || !Number.isInteger(minuts)) {
//		return 'Ошибка, проверьте данные';
//	} else if (hours >= 5 && hours <= 10){
//		return `Это ${parseInt(hours)} часов и ${min} минут`;
//	} else if (hours > 1 && hours < 5){
//		return `Это ${parseInt(hours)} часа и ${min} минут`;
//	} else if (hours == 1){
//		return `Это ${parseInt(hours)} час и ${min} минут`;
//	} else if (hours < 1) {
//		return `Это ${parseInt(hours)} часов и ${min} минут`;
//	}
//}

//console.log(getTimeFromMinutes(60));

////1 час
////2,3,4 часа
////5, 6, 7, 8, 9, 10 часов


//function findMaxNumber(a, b, c, d) {
//	if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
//		return 0;
//	} else {
//		return Math.max(a, b, c, d);
//	}
//};

//console.log(findMaxNumber(5, '6', '10'));


//const str1 = 'Home, Sweet',
//	arr2 = [5, 17, 3, 81, 54];

//console.log(arr2.sort(sortArr)); // Сортує елементи в масиві тільки як строки [10, 17, 2, 28, 8], щоб правильно сортувались числа [2, 8, 10, 17, 28] потрібно передати функцію в цей метод
//function sortArr(a, b) {
//	return a - b;
//}


//const personalPlanPeter = {
//	name: 'Peter',
//	age: '29',
//	skills: {
//		 languages: ['ru', 'eng', 'ua'],
//		 programmingLangs: {
//			  js: '20%',
//			  php: '10%',
//			  react: '55%'
//		 },
//		 exp: '1 month'
//	},
//	showAgeAndLangs: function(item) {
//		const {age} = item;
//		const {languages} = item.skills;
//		const str = languages.join(' ').toUpperCase();
//		const res = `Мне ${age} и я владею языками: ${str}`;
//		return res;
//	}
//};

//personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//function showExperience(plan) {
//	const {exp} = plan.skills; 
//	return exp;
//}

//function showProgrammingLangs(plan) {
//	const {programmingLangs} = plan.skills;
//	if	(Object.keys(programmingLangs).length == 0) {
//		return '';
//	} 
//	let res = '';
//	for (let key in programmingLangs) {
//		res += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//	}
//	return res;
//}


//console.log(showProgrammingLangs(personalPlanPeter));


//const family = ['Peter', 'Ann', 'Alex', 'Linda'];

//function showFamily(arr) {
//	if(arr.length != 0) {
//		const res = arr.join(' ');
//		console.log(`Семья состоит из: ${res}`);
//	} else {
//		console.log('Семья пуста');
//	}
//}

//showFamily(family);


//const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

//function standardizeStrings(arr) {
//	//const res = arr.join(' ').toLowerCase().split(' ');
//	arr.forEach(element => {
//		console.log(element.toLowerCase());
//	});
//}

//standardizeStrings(favoriteCities);


//const someString = 'This is some strange string';

//function reverse(str) {
//	if (typeof(str) != 'string') {
//		console.log('Ошибка!');
//	} else {
//		console.log(str.split('').reverse().join(''));
//	}
//}

//reverse(someString);


//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

//function availableCurr(arr, missingCurr) {
//	if (arr.length == 0) {
//		console.log('Нет доступных валют');
//	} else {
//		let str = 'Доступные валюты:\n';
//		arr.forEach(element => {
//			if (element != missingCurr) {
//				str += `${element}\n`;
//			}
//		});
//		console.log(str);
//	}
//}

//availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD');


//const shoppingMallData = {
//	shops: [
//		 {
//			  width: 10,
//			  length: 5
//		 },
//		 {
//			  width: 15,
//			  length: 7
//		 },
//		 {
//			  width: 20,
//			  length: 5
//		 },
//		 {
//			  width: 8,
//			  length: 10
//		 }
//	],
//	height: 5,
//	moneyPer1m3: 30,
//	budget: 50000
//};


//function isBudgetEnough(data) {
//	const {shops, height, moneyPer1m3, budget} = data; 

//	let sum = 0;

//	shops.forEach(function(item){
//		sum += item.width * item.length;
//	});

//	const generalSum = (sum * height) * moneyPer1m3;

//	if (budget >= generalSum) {
//		console.log('Бюджета достаточно');
//	} else {
//		console.log('Бюджета недостаточно');
//	}
//}

//isBudgetEnough(shoppingMallData);



//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

//function sortStudentsByGroups(arr) {
//	arr.sort();

//	const a = [], b = [], c = [], res = [];

//	for (let i = 0; i < arr.length; i++) {
//		if (i < 3) {
//			a.push(arr[i]);
//		} else if (i < 6) {
//			b.push(arr[i]);
//		} else if (i < 9) {
//			c.push(arr[i]);
//		} else {
//			res.push(arr[i]);
//		}
//	}

//	return [a, b, c, `Залишились такі гравці - ${res.length == 0 ? '-' : res.join(', ')}`];
//};
//console.log(students);

//console.log(sortStudentsByGroups(students));

//const myFn = function() {
//	let counter = 0;
//	const nested = function() {
//		counter = counter + 1;
//		return counter;
//	};
//	return nested;
//};

//const res = myFn();

//const a1 = res();
//const a2 = res();
//const a3 = res();

//console.log(a1, a2, a3);

//const restorantData = {
//	menu: [
//		 {
//			  name: 'Salad Caesar',
//			  price: '14$'
//		 },
//		 {
//			  name: 'Pizza Diavola',
//			  price: '9$'
//		 },
//		 {
//			  name: 'Beefsteak',
//			  price: '17$'
//		 },
//		 {
//			  name: 'Napoleon',
//			  price: '7$'
//		 }
//	],
//	waitors: [
//		 {name: 'Alice', age: 22}, {name: 'John', age: 24}
//	],
//	averageLunchPrice: '20$',
//	openNow: true
//};

//function transferWaitors(data) {
//	const copy = Object.assign({}, data);

//	copy.waitors = [{name: 'Mike', age: 32}];
//	return copy;
//}
//console.log(transferWaitors(restorantData));
//console.log(restorantData);


//console.log(restorantData.menu[3].price.slice(0, -1));

//function isAverageLunchPriceTrue(fDish, sDish, average) {
//	if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
//		 return 'Цена ниже средней';
//	} else {
//		 return 'Цена выше средней';
//	}
//}


//console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

//const elem = document.getElementById('one');
//console.log(elem);

//elem.style.cssText = 'background: blue; color: red';

//elem.forEach(item => {
//	item.style.cssText = 'background: blue; color: red';
//});

//elem.style.cssText = 'background: blue; color: red';

//const square = document.querySelectorAll('.header');
//const circle = document.querySelectorAll('.circle');

//const newEl = document.createElement('button');
//newEl.classList.add('buttons');
//circle[0].before(newEl);
//newEl.innerText = 'Click me!';
//newEl.insertAdjacentHTML('afterend', '<h1>Somebody text</h1>');


//square[0].after(newEl);

const onClick = document.querySelector('button'); // Отримуємо елемет зі сторінки
const link = document.querySelector('a');

//onClick.addEventListener('click', (event) => { // навішуємо подію (click) на елемент з сторінки / та додаємо обробник події (event) в функцію як аргумент
//	console.log('Touch me!'); // виконуємо якусь функцію при кліку на елемент
//	console.log(event); // обробник подій який виводить дані на що саме клікнув користувач (створюється об'єкт з його властивостями)
//	console.log(event.type); // один із властивостей обробника який виводить на що саме клікнув юзер
//});

//const deleteEl = (event) => {
//	event.target.remove();
//};

//onClick.removeEventListener('click', deleteEl);

//const deleteEl = (e) => {
//	console.log(e);
//	console.log(e.target);
//};

//onClick.addEventListener('click', deleteEl);
//onClick.removeEventListener('click', deleteEl);

//let num = 0;

//const showMe = function (event) {
//	console.log(event);
//	console.log(event.target);
//	console.log(event.type);
//	num++;
//	if(num == 2) {
//		onClick.removeEventListener('mouseenter', showMe);
//	}
//};

//onClick.addEventListener('mouseenter', showMe);

//link.addEventListener('click', (event) => {
//	event.preventDefault();
//	console.log('default');
//}, {once: true});

//const nodeEl = document.body.childNodes;

//for(let item of nodeEl) {
//	if(item.nodeName == '#text') {
//		continue;
//	}
//	console.log(item);
//}

//console.log(document.body.children);





//function pow(x, n) {
//	let result = 1;
 
//	for (let i = 0; i < n; i++) {
//		result *= x;
//	}
 
//	return result;
//}
 
//console.log(pow(2, 1));
//console.log(pow(2, 2));
//console.log(pow(2, 3));
//console.log(pow(2, 4));

 
//let students = {
//	js: [{
//		 name: 'John',
//		 progress: 100
//	}, {
//		 name: 'Ivan',
//		 progress: 60
//	}],

//	html: {
//		 basic: [{
//			  name: 'Peter',
//			  progress: 20
//		 }, {
//			  name: 'Ann',
//			  progress: 18
//		 }],

//		 pro: [{
//			  name: 'Sam',
//			  progress: 10
//		 }],

//		 semi: {
//			  students: [{
//				name: 'Test',
//				progress: 100
//			  }]
//		 }
//	}
//};

//function getTotalProgressByIteration(data) {
//	let total = 0;
//	let students = 0;

//	for (let course of Object.values(data)) {
//		 if (Array.isArray(course)) {
//			  students += course.length;

//			  for (let i = 0; i < course.length; i++) {
//				total += course[i].progress;
//			  }
//		 } else {
//			  for (let subCourse of Object.values(course)) {
//				students += subCourse.length;

//				for (let i = 0; i < subCourse.length; i++) {
//						 total += subCourse[i].progress;
//				}
//			  }
//		 }
//	}

//	return total / students;
//}

//// console.log(getTotalProgressByIteration(students));


//function getTotalProgressByRecursion(data) {
//	if (Array.isArray(data)) {
//		 let total = 0;

//		 for (let i = 0; i < data.length; i++) {
//			  total += data[i].progress;
//		 }

//		 return [total, data.length];
//	} else {
//		 let total = [0, 0];

//		 for (let subData of Object.values(data)) {
//			console.log(Object.values(subData));
//			  const subDataArr = getTotalProgressByRecursion(subData);
//			  total[0] += subDataArr[0];
//			  total[1] += subDataArr[1];
//		 }

//		 return total;
//	}
//}

//const result = getTotalProgressByRecursion(students);

//console.log(result[0]/result[1]);


function factorial(n) {
	if (typeof n !== 'number' || !Number.isInteger(n)) {
		return 'Error';
	} else if (n <= 1) {
		return 1;
	} else {	
		let sum = n * factorial(n - 1);
		return sum;
	}
};

console.log(factorial(5));

//if (typeof n !== 'number' || !Number.isInteger(n)) {
//	console.log('Error');
//}
//function test(n) {
//	if (n === 1) {
//		return n;
//	} else {
//		return n * test(n - 1);
//	}
//}

//console.log(test(5));