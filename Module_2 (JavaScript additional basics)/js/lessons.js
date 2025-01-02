// MODULE_2

'use strict'; // Строгий режим (новий), для недопущення старих помилок в JS

//* Додаткові оператори

// Nullish (??) оператор - перевіряє операнд зліва на undefined або null, якщо знаходиться таке значення то повертає його, якщо ні - підставляє замість них будь-яке значення.
let userName;
console.log(userName ?? 'Jonh');

// Оператор опционального ланцюжка (?) - перевіряє операнд зліва на undefined або null - якщо знаходиться таке значення то повертає його, якщо ні - код йде далі.
const obj = {
	name: 'Jonh',
	age: 32,
	citi: function() {
		console.log('New York');
	}
};

console.log(obj?.salary?.developer);
obj.country?.();

//* Живі та статичні колекції

const boxQuery = document.querySelectorAll('.box'); // NodeList (статична колекція)
const boxClass = document.getElementsByClassName('box'); // HTMLCollection (жива колекція)

//boxQuery[0].remove();
//boxClass[0].remove();

console.log(boxQuery); // початковий результат (видалення не береться до уваги)
console.log(boxClass); // кінцевий результат після всіх дій (видалення)

//* Конвертація з псевдомасива до звичайного масива
const arr = Array.from(boxClass);
console.log(arr);

//* Пошук елементів в DOM дереві
// matches
boxQuery.forEach((item) => {
	//const res = item.matches('.box');
	if (item.matches('.box')) { // соответствует ли элемент указанному css-селектору (true or false)
		console.log(item);
	}
});

// closest
console.log(boxQuery[2].closest('.wrapper')); // возвращает ближайший родительский элемент

//* Тип даних Symbol 
//Символы часто используются в качестве уникальных ключей объекта. Они не пересекаются с ключами, которые могут быть добавлены другим кодом, а также скрыты от доступа из другого кода. Не итерируется в объекте (скривается).
const id = Symbol('name'); // створення унікального ключа
const company = {
	ceo: 'Mask',
	people: 500,
	[id]: 'Some text'
};

console.log(id, company['name']);

//* Додаткові методи Object
//Дескриптори ключей об'єкта (флаги) - конфугурація властивості:
/* 
writable - чи можна перезаписувати ключ;
enumerable - чи буде ключ перебиратись (ітерація);
configurable - чи можна видалити ключ або змінити його флаги
*/
console.log(Object.getOwnPropertyDescriptor(company, 'ceo')); // переглянути флаги та значення ключа
Object.defineProperty(company, 'ceo', {writable: false}); // зміна флагів
console.log(Object.getOwnPropertyDescriptor(company, 'ceo'));

// Порівняння значень ключів об'єкта
console.log(Object.is(10, 10));

// Отримання ключів об'єкта у вигляді масиву
console.log(Object.keys(company));

// Отримання значень ключів об'єкта у вигляді масиву
console.log(Object.values(company));

// Отримання значень ТА ключів об'єкта у вигляді масиву (2D - ключ та значення в одному масиві)
console.log(Object.entries(company));

//* Перебір об'єктів та масивів
// Ітеріруємі конструкції - це ті конструкції, які можна перебрати за допомогою for of (строго по порядку). Об'єкти не можливо перебрати без Symbol.iterator
const arrName = ['Nick', 'James', 'Adam'];

for (const key in company) { // перебирає ключ та його значення: об'єкта, масива, рядка (для масива та рядка перебор може йти не по порядку)
	console.log(company[key]);
	console.log(key);
}

for (const key of arrName) { // перебирає значення ключа: об'єкта, масива, рядка (підходить для масиву та рядка)
	console.log(key);
}

// Додаємо до об'єкта Symbol.iterator, щоб за допомогою for of його перебрати
const salary = {
	jonh: 1000,
	adam: 2000,
	nick: 4500,
	someMethod: function () {
		console.log('Some text');
	}
};
salary[Symbol.iterator] = function () {
	return {
		current: this.jonh,
		last: this.nick,

		next() {
			if (this.current < this.last) {
				this.current = this.current + 300;
				return {done: false, value: this.current};
			} else {
				return {done: true};
			}
		}
	};
};

for (let key of salary) {
	console.log(key);
}

//* Map (структура даних)
// Те саме, що і об'єкт, тільки ключі можуть бути будь-якими типами данних (object,string, number, boolean). Object - тільки string. Map елементи йдуть по порядку.

let maps = new Map(); //створення карти
let newMaps = new Map([
	[{banan: true}, 500],
	['orange', 700],
	[57, 'number']
]);

for (let key of newMaps.keys()) { 
	console.log(Object.keys(key)); // якщо в нас ключ в Map це Object, ми можемо витягнути ключ або значення цього Object
}

for (let [key, value] of newMaps.entries()){ // перебір ключів і тд
	console.log(key, value);
}
maps.set('some', 3000) // додавання ключ - значення
	 .set(777, 'number of user'); // додавання декількох елементів
console.log(maps.get('some')); // отримання значення по ключу
console.log(maps.has('some')); // перевіряє чи є такий ключ
console.log(maps.size); // кількість елементів в карті (ключ-значення)
console.log(maps.keys()); // перебирає ключі карти
console.log(maps.values()); // перебирає значення ключів
console.log(maps.entries()); // перебирає пару ключ-значення
for (let item of newMaps) {
	console.log(item);
}
// from Object to Map
let newMap = new Map(Object.entries(salary));
console.log(newMap);

// from Map to Object
let newObj = Object.fromEntries(maps);
console.log(newObj);

//* Set (структура даних)
// Залишає тільки унікальні значення (має такі ж самі методи як і в Map)

const newArr = ['Jonh', 'Adam', 'Nick', 'Jonh', 'Ann', 'Nick'];
const newSet = new Set(newArr);
newSet.add('Leo'); // додавання елементу
console.log(newSet);

// Методи перебору
for (let value of newSet) { // перебір елементів 
	console.log(value);
}

newSet.forEach((value, valueAgaing, newSet) => { // в Set нема ключів, тільки значення
	console.log(value, valueAgaing);
});

function uniqe (arr) { 
	return Array.from(newSet); // отримання звичайного масиву з Set (вже з унікальними даними)
}
console.log(uniqe(newArr));

//* Рекурсія
// Приклад - підрахунок скільки всього елементів в масиві
function deepCount(a){
	let length = 0; // створюємо лічильник

	if (a.length < 1) { // якщо кількість елементів в масиві менше 1 - виводимо поточну кількість (0)
		return a.length;
	} else { // в іншому випадку
		length = a.length; // в ішному випадку присвоєму кількість елементів в лічильник 
		a.forEach((item) => { // та запускаємо перебір масиву
			if (Array.isArray(item)) { // якщо в масиві попадається елемент-масив
				length += deepCount(item); // то запускаємо рекурсію (ще раз виконується функція deepCount), тільки вже з аргументом (item) на якому спрацювала умова (елемент-масив). Повертається 1 та додається до лічильника.
			}
		});
	}
	return length; // повертаємо на зовні лічильник
}
console.log(deepCount([1, 2, [3, 4, [5]]]));

