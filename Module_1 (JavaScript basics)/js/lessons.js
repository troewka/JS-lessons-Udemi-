// MODULE_1

'use strict'; // Строгий режим (новий), для недопущення старих помилок в JS

//* Змінні
let sum = 5; // Зміна яку можна перезаписувати (краще використоувати const)
const name = 'Jonh'; // Зміна константа (на пряму перезаписувати не можливо)
var old = 18; // Стара версія змінної (в нових проектах не використовується, можливо визивати до обявлення такої зміної, якщо вимкнений 'use strict')

// Назва змінних повинна бути логічною, що вона містить

// camelCase - стандартна назва змінних
// snake_case
// UPPER_SNAKE_CASE - назва змінних, які по ходу коду не будуть змінюватись взагалі
// PascalCase
// Kebab-case

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Типи даних
//Все в JS це об'єкти або поводять себе як об'єкти

//Примітивній типи:
Number(); // (Infinity, NaN) - число
String(); // 'Text' - строка
Boolean(); // false / true - логічний тип даних
Undefined(); // значення відсутнє
Null(); // значення що не існує
BigInt(); // велике числове значення (2 в 53 степені)
Symbol(); // створення унікальних індетифікаторів

//Складніші типи:
Object(); // об'єкти (колекція даних)
Array(); // масиви (колекція даних)
Function(); // функції

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Об'єкти та масиви

// Різниця між об'єктами та масивами, те що елементи в масиву йдуть попопрядку (0, 1, 2), об'єкти ні.

//!ОБ'ЄКТИ------------------------------------------------------------

const obj = { //Object
	name: 'Adam', // ключ - значення
	old: 18,
	place: {
		country: 'USA',
		city: 'New York'
	},
	salary: [5000, 200],
	myMethod: function() { // Створюємо власний метод
		console.log('Створення влсного методу');
	}
};

console.log(obj.place); // вивід ключа або obj[place]
delete obj.old; // видалення ключа
obj.gender = 'male'; // додавання ключа


// Перебір об'єктів
let counter = 0; // Рахуємо скільки елементів (ключ-значення в обєкті)
for (let key in obj) { // key -властивість (свойство) в об'єкті
	if (typeof(obj[key]) === 'object') {
		for (let i in obj[key]) {
			console.log(`Властивість об'єкту: ${i} має значення ${obj[key][i]}`); // перерибарання властивості об'єкта, якщо властивость це ще один об'єкт
			counter++;
		}
	} else {
		console.log(`Властивість об'єкту: ${key} має значення ${obj[key]}`); // obj[key] - значення властивості (свойства)
		counter++;
	}
}
console.log(counter);

console.log(Object.keys(obj)); // робить масив з ключів обєкта

console.log(Object.keys(obj).length); // Рахуємо скільки елементів тепер вже в масиві переведений з обєкту

obj.myMethod(); // Викликаємо створений метод

// Деструктирізація обєкту
const {place, salary} = obj; // витягуємо потрібну ключі з обєкта
console.log(place, salary);

// Клонування об'єкту
// 1
Object.assign({}, obj); // Створює новий пустий об'єкт, та ПОВЕРХНЕВО копіює туди вже раніше сторений obj (вкладені в об'єкт інші об'єкти чи масиви не копіюються)

// 2 Spread оператор
const objNew = {...obj, day: 'Friday'}; // за допомогою Spread оператора клонуємо об'єкт з його елементтами + додаючи свої нові елементи. Можливо об'єднувати об'єкти за допомогою Spread оператора
console.log(objNew);

// 3 Для глибиного коміювання об'єкта просто замінуюмо весь оригінальний об'єкт або масив.
const copy = Object.assign({}, obj);

copy.place = [{
	country: 'Spain',
	city: 'Barcelona'
}];

// Прототип об'єкту
const newObj = Object.create(obj); // Наслідує всі властивості та методи заданого об'єкту. По типу шаблону, від якого можна робити нові об'єкти на базі якогось вже створено об'єкту, але задаючі якісь відмінності
newObj.myMethod();

//!МАСИВИ------------------------------------------------------------

const arr = ['milk', 18, {products: 'apple'}]; // Array
// 0: 'milk', 1: 18, 2: {products: apple} // ключ - значення
console.log(arr[2]); // {products: apple}

// Перебір масивів

const arrTest = ['Ivan', 15, true, 'black'],
	strTest = 'Hello World';

// 1
for (let i = 0; i < arrTest.length; i++) {
	console.log(arrTest[i]); // Перебирає масив [arrTest], кожного разу виводячи елемент по порядковому номеру [i] його в масиві. arrTest[0] = Ivan, arrTest[1] = 15, arrTest[2] = test і т.д.
}
// 2
for (let value of arrTest) {
	if (typeof(value) === 'boolean') {
		break;
	}
	console.log(value); // Перебирає масив [arrTest], кожного разу виводячи елемент [value]. Є можливість зупиняти масив [break] та продовжувати [continue]
}
// 3 (використовується майже завжди)
arrTest.forEach(function(item, index, arr) { // Перебирає масив [arrTest], маючи колбек функцію, яка може вивести максимум 3 аргументи: 1. Кожний елемент в масиві 2. Порядковий номер елементу в масиві. 3. Посилання на масив який перебирається. Нема можливісті зупиняти масив [break] та продовжувати [continue]
	console.log(`Номер по порядку ${index} має значення ${item} в масиві ${arr}`);
});

// Клонування масиву
// 1
const newArray = arr.slice(); // Копіює ПОВЕРХНЕВО масив (вкладені в масив інші масиви чи об'єкти не копіюються)
newArray[2].products = 'juice';
console.log(arr);
console.log(newArray);

// 2 Spread оператор
const arrNew = [...arrTest, {salary: 1500, day: 'Friday'}]; // за допомогою Spread оператора клонуємо масив з його елементтами + додаючи свої нові елементи. 
const arrNew2 = [1, true, ['fruit', 'milk'], {week: 'Sunday', weather: 4}]; 
const arrRes = [...arr, ...arrNew, ...arrNew2]; // за допомогою Spread оператора об'єднуємо масиви
console.log(arrRes);

// 3 Приклад з функцією + масив
const myFn = function(a, b, c, d) { // У функції є 4 аргументи, які щось роблять всередині функції
	console.log(a, b, c, d);
};
myFn(...arrTest); // Наприклад з серверу приходить масив даних, в якому є 4 елементи (наприклад а = країна, b = місто, c = погода, d = зарплатня). За допомогою Spread оператора ми розвертаємо масив, який прийшов з сервера та підставляємо його в аргументи функції

//-----------------------------------------------------------------------------------------------------------------------------------------//

//*Модальні вікна для браузера
alert(); //тільки інформація
confirm(); // true або false
prompt(); // input

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Інтерполяція
const userName = 'Jonh';
console.log(`Hello, ${userName}`); // інтерполяція завдяки бектикам ``

//-----------------------------------------------------------------------------------------------------------------------------------------//

//*Оператори

//+ - * / - математичні оператори
//== - порівняння не строге
//=== - порявняння строге (тип даних)
//&& - І - повертає перше хибне значення
//|| - АБО - повертає перше правдиве
// оператор ! - НЕ

const num = 5;
const num2 = 10;

num++; // інкримент посфіксий (збільшує число на 1 після одного проходу)
num2--; // декримент посфіксий (зменшує число на 1 після одного проходу)
++num; // інкримент префіксний  (збільшує число на 1 до проходу)
--num2; // декримент префіксний (зменшує число на 1 до проходу)

const procent = 52 % 3; // залишок від ділянення (5 / 2 = 2,5 - не ціле число, округлюється і залишається процент від ділення 1)
console.log(procent);
for(let i = 1; i < 11; i++) {
	if(i % 2 === 0) { // ділимо одне число на інше, якщо є залишок від ділення (1) то це не парне число, якщо залишку від ділення не залишається (0) то це парне число.
		console.log(i);
	}
}
// Якщо ділити не парні числа на парні - буде залишатись залишок (1)
// Якщо ділити парні числа на парні - буде залишатись залишок (0)

//-----------------------------------------------------------------------------------------------------------------------------------------//

//*GIT
// git init - щоб GIT слідкував за папкою в якій він ініціалізірувався
// git config --global user.name "John Doe"
// git config --global user.email johndoe@example.com
// git status - переглянути якій статус у всіх файлах
// git add -A - вибрати всі файли
// git commit -m "my comment" - закомітити всі файли (зробити точку збереження)
// git push - відправити всі (змінені) файли на репозиторій GitHub
// git clone http://github/.. - скопіювати всі файли з репозиторія на іншій компютер
// git pull - оновлює всі локальні файли до останьої версії (з репозиторія) //

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Умови

const value = 4;

if(value > 5) { // true або false
	console.log('okey');
	
} else if (value < 5) {
	console.log('not okey');	
}	
else {
	console.log('eror');
}


switch(value) { // працює так як і if else, але switch робить строге порівняння
case 10:
	console.log('ok');
	break;
case 11:
	console.log('oki');
	break;	
default:
	console.log('eror');
	break;
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Логічні оператори && || !

const hamburger = 5,
	cola = 2,
	fries = 1,
	nuggets = 0;

if (hamburger > 2 && cola === 2 && fries || nuggets) { // Пріоритети операторів: 1. Оператор більше(>) 2. Оператор порівняння(===) 3. Оператор &&(і)-зупиняється на першому false 4. Оператор ||(ілі)-зупиняється на першому true
	console.log('Все в наявності');
} else {
	console.log('Не вистачає на всіх');	
}
// Спочатку перевіряється чи hamburger більше 2, потім чи cola рівно 2, потім чи є hamburger і cola і fries(true) потім чи є це тріо або nuggets. Результат TRUE

//-----------------------------------------------------------------------------------------------------------------------------------------//

//* Цикли

let nums = 1;

while(nums < 10) { // Умова
	console.log(nums); // Те що повинні виконати
	nums++; // збільшуємо через кожну ітерацію зміну на 1
}


do { // Умова виконається хоча б 1 раз
	console.log(nums); // Те що повинні виконати
	nums++; // збільшуємо через кожну ітерацію зміну на 1
}
while(nums < 15); // Умова


for(let i = 1; i <= 10; i++) { // Умова
	if(i === 5) {
		break; // Якщо умова спрацьовує, то цикл завершується
		continue; // Якщо умова спрацьовує, то пропускаємо те значення і цикл працює далі
	}
	console.log(i); // Те що повинні виконати
}

//* Функції
// Якщо потрібно повернути якесь значення з функції потрібно завжди писати return. 

// Function Declaration (може визиватись до її об'явлення)
function nameFunction (a, b) {
	return (a + b);
}

const res = nameFunction(5, 5);
console.log(res);

// Function Expression (визивається тільки після її об'явлення)
const myFunction = function(a, b) {
	return (a + b);
};

const res2 = myFunction(10, 5);
console.log(res2);

// Стрілочна функція (не має свого контексту this)
const test = (a, b) => {
	return (a + b);
};

const res3 = test(15, 7);
console.log(res3);

// Одну функцію можна передавати як аргумент в іншу.
const test1 = function(a, b) {
	return a + b;
};

const test2 = function(num) {
	return num;
};

const res4 = test2(test1(5, 5));
console.log(res4);

//* Рядок та числа (методи, властивості)

const sumStr = '  20.2 Hello World';

console.log(sumStr.slice(5, 16)); // вирізає елемент (старт / кінець)

console.log(strTest.split(',')); // Переводить строчний елемент в масив. Якщо у вихідній строчці слова розділені [,], то в масив вони будуть так і записуватись 'Hello, my name is, Jonh' - ['Hello', my name is', 'Jonh'] тобто буде 3 елементи в масиві. Дивлячись який розмежувач вказати, це може бути і пробіл.

console.log(arrTest.join(';')); // Переводить масив в строчний елемент. Задаємо розмежувач який буде стояти між елементами з масиву в строчці ['Ivan', 3, true] - 'Ivan;3;true'.

console.log(arrTest.sort(sortArr)); // Сортує елементи в масиві тільки як строки [10, 17, 2, 28, 8], щоб правильно сортувались числа [2, 8, 10, 17, 28] потрібно передати функцію в цей метод
function sortArr(a, b) {
	return a - b;
}

console.log(sumStr.length); // кількість елементів в рядку чи масиві

console.log(sumStr.toUpperCase()); // переводить всі символи в великий регістор

console.log(sumStr.indexOf('W')); // шукає порядковий номер елементу, якщо нема (-1)

console.log(parseInt(sumStr)); // переводить строковий елемент в числовий заокруглюючи його.

console.log(sumStr.trim()); // прибирає пробіли на початку та в кінці рядка

//* Динамічна типизація

// 1 String (все що об'єднується зі строчкою '+' (число, null, undefined, boolean) стає строчкою). Називається конкатинація (об'єднання)
const str = 5 + 'I`m string';
console.log(typeof(str));

// 2 Number
const numss = +'456';
console.log(typeof(numss));

// 3 Boolean (0, '', null, undefined, NaN - завжди false)
const bool = 0;
if (bool) { // сюди передається 0, 0 - це false, умова не виконується
	console.log('Working....');
}
console.log(!!bool); // два знаки !! виводять яке значення має змінна (перевірка на boolean)

// пустий масив [] при конкатинації (+) з іншими даними перетворюється на пустий рядок


//* ВЗАЄМОДІЯ ЗІ СТОРІНКОЮ

// Отримання елементу з html сторінки

const elem1 = document.getElementById('one'); // Отримання елементу по #id
const elem2 = document.getElementsByTagName('button'); // Отримання елементу по тегу button (колекція)
const elem3 = document.getElementsByClassName('header'); // Отримання елементу по класу .header (колекція)
//Універсальний спосіб
const univ = document.querySelectorAll('#one', 'button', '.header'); // Отримуємо один із селекторів. Можна перебирати за допомогою forEach. (колекція).
univ[0].style.cssText = 'color: black'; // Звертаємось до кокретного елементу в псевдомасиві (колекції)
const univ2 = document.querySelector('#one', 'button', '.header'); // Отримує тільки перший елемент з колекції.

// Взаємодія з елементами на сторінці

// ДОДАВАННЯ INLINE STYLE
//Кожна CSS властивість через окремий запис
elem1.style.background = 'red'; // Задаємо інлайн стиль напряму в html документ
elem1.style.borderRadius = '100%';
elem2[1].style.color = 'black'; // Задаємо конкретному елементу (якщо це колекція) інлайн стиль напряму в html документ

//Кожна CSS властивість через загальний запис cssText
elem1.style.cssText = 'background: red; border-radius: 100%'; // Задаємо інлайн стиль напряму в html документ
elem2[2].style.cssText = 'background: red; border-radius: 100%';
elem2.forEach(item => { // За допомогою перебору задаємо всім елементам інлайн стилі
	item.style.cssText = 'background: blue; color: red';
});
//-----------------------------------------------------------

// Створення елементу та текстової ноди (знаходиться тільки в JS)
const newElem = document.createElement('div'); // 
const text = document.createTextNode('Будь який текст');

// Додавання класу до елемента (знаходиться тільки в JS)
newElem.classList.add('header'); // Дадаємо до елементу вже готовий клас з CSS

// Вирізаємо та вставляємо елемент
// ДО або ПІСЛЯ в самому елементі
elem1.append(newElem, text); // додаємо в кінець ноди (блоку)
elem1.prepend(newElem, text); // додаємо на початок ноди (блоку)
// ДО або ПІСЛЯ за елементом
elem3[0].before(newElem, text); // дадаємо після закінчення ноди (блоку)
elem3[0].after(newElem, text); // дадаємо до початку ноди (блоку)

// Видалення елементу
univ[0].remove();

// Заміна елементу
univ[0].replaceWith(elem1[0]); // заміна елемента одного на інший (1. який міняється 2. на який міняємо)

// Вставка HTML коду та тексту 
newElem.innerHTML = '<h1>Boston</h1>';
newElem.innerText = 'Los-Angeles';

newElem.insertAdjacentHTML('afterbegin', '<h1>Boston</h1>'); // місце вставки HTML коду

// Приклад заміни елементів на сторінці з масиву даних
const films = document.querySelector('.promo__interactive-list'); // Отримуємо батьківський контейнер зі списком існуючих елементів на сторінці

films.innerHTML = ''; // Очищаємо його

movieDB.movies.forEach((item, i) => { // Перебираємо масив з якого потрібно взяти нові елементи
	films.innerHTML += ` 
    <li class="promo__interactive-item">${i + 1} ${item} 
        <div class="delete"></div>
    </li>
    `; // В ощичений контейнер вставляємо нову верстку підставляючі нові елементи з масиву та індекс по порядку
});


//* Події та їх обробники (Desktop)

const onClick = document.querySelector('button'); // Отримуємо елемет зі сторінки

onClick.addEventListener('click', (event) => { // додавання події (click) на елемент з сторінки / та додаємо обробник події (event) в функцію як аргумент
	console.log('Touch me!'); // виконуємо якусь функцію при кліку на елемент
	console.log(event); // обробник подій який виводить дані на що саме клікнув користувач (створюється об'єкт з його властивостями)
	console.log(event.target); // один із властивостей обробника (event) який виводить на що саме клікнув юзер
	console.log(event.type); // один із властивостей обробника (event) який виводить яка подія відбулась з елекментом
});

onClick.removeEventListener('click', (event) => { // видалення події (click) з елементу
}); 

const showMe = function (event) { // окремо створюємо функцію та передаємо її в обробник події
	console.log(event);
	console.log(event.target);
	console.log(event.type);
};

onClick.addEventListener('mouseenter', showMe, {once: true}); // 1.Тип події 2.Обробник події 3.Опція (в даному випадку дія виконується тільки 1 раз, заміную removeEventListener)
onClick.removeEventListener('mouseenter', showMe);

// Відміна стандартної поведінки браузера

onClick.addEventListener('click', function(event) {
	event.preventDefault(); // викликаємо метод у event, який відмініє у елемента дії такі як перехід/відправку і т.д.
}); 

//* Події та їх обробники (Mobile)
onClick.addEventListener('touchstart / touchend / touchmove', (e) => {
/*touchstart - Коснулись экрана
touchend - Палец убрали
touchmove - Двигаем пальцем */
});

//* Навігація по DOM-елементах (DOM-дереву)

/*
async - асинхроно завантажує DOM дерево та підкючені скрипти (який скрипт завантажиться швидше той і запускається перший)
defer - все теж саме, тільки запускається по порядку черги (як вони пыдкюченні в HTML) */

window.addEventListener('DOMContentLoaded', () => {
// Событие DOMContentLoaded запускается когда первоначальный HTML документ будет полностью загружен и разобран, без ожидания полной загрузки таблиц стилей, изображений и фреймов.
});

// NodeList - текстові вузли (містять переноси(text), коментарі(comments), елементи)
console.log(document.body.childNodes); // всі дочірні ноди
console.log(document.body.firstChild); // перша дочірня нода
console.log(document.body.lastChild); // остання дочірня нода
console.log(document.body.previousSibling); // попередній сусід
console.log(document.body.nextSibling); // наступний сусід

// Elements - узли елементи (містять тільки теги без переносів та коментарів)
console.log(document.body.children); // всі дочірні елементи
console.log(document.body.parentElement); // батьківський елемент
console.log(document.body.firstElementChild); // перший дочірній елемент
console.log(document.body.lastElementChild); // останній дочірний елемент
console.log(document.body.previousElementSibling); // попередній сусід
console.log(document.body.nextElementSibling); // наступний сусід

// Щоб побачити тільки дочірні елементи як наприклад у childNodes потрібно перебрати пвсевдо-колекцію за допомогою for of
for (let elem of document.body.childNodes) { // перебираємо всю ноду, при натрапляні на текстову ноду ми її пропускаємо і йдемо далі та виводимо тільки елементи
	if	(elem.nodeName == '#text') {
		continue;
	}
	console.log(elem);
}

// Data-attributes - це додатковий селектор в DOM дереві по якому можна звертатись до елементу (необмежена кількість на сторінці)
console.log(document.querySelector('[data-btn="1"]').parentElement); // по data-арибуту знаходимо батьківський елемент або ноду

//* Рекурсія (викликає саму себе в функції)

//Приклад з факторіалом
function factorial(n) {
	if (typeof n !== 'number' || !Number.isInteger(n)) { 
		return 'Error';
	} else if (n <= 1) { // умова виходу з рекурсії (обов'язково)
		return 1;
	} else {	
		return n * factorial(n - 1);  // 5 * (5 -1) * (4 - 1) * (3 -1) * (2 - 1)
	}
};

console.log(factorial(5));


/*
factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1;

factorial(1) = 1 * 1 = 1;
factorial(2) = 1 * 2 = 2;
factorial(3) = 3 * 2 = 6;
factorial(4) = 4 * 6 = 24;
factorial(5) = 5 * 24 = 120;
*/