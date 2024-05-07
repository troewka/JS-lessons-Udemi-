'use strict';

let numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?'); // Питання юзера записуємо в зміну

const personalMovieDB = { // Створюємо об'єкт
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const start = function() {
	while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms))
		numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
};

start();

const queshionOfFilms = function() {
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
};
queshionOfFilms();

const userLevel = function() {
	if(personalMovieDB.count < 10) {
		console.log('Small films');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Normal films');
	}	else if (personalMovieDB.count >= 30) {
		console.log('You watch many films');
	} else {
		console.log('some error');
	}
};

userLevel();

const showMyDB = function() {
	if(personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
};

showMyDB();

const writeYourGenres = function() {
	for(let i = 1; i < 4; i++) {
		const yourLikeGenres = prompt(`Ваш юлюблений жанр під номером ${i}`);
		personalMovieDB.genres.push(yourLikeGenres);
	}
};

writeYourGenres();

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





