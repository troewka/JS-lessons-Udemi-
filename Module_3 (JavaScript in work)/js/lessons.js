// MODULE_3

'use strict'; // Строгий режим (новий), для недопущення старих помилок в JS


//* ClassList

const btn = document.querySelectorAll('button'),
	   wrap = document.querySelector('.wrapper');

btn[0].classList.add('green'); // додаємо клас (зазделегідь підготовлений в css) до 1-го елементу.
btn[0].classList.item(0); // отримуємо клас по порядковому номеру
btn[0].classList.length; // отримуємо кількість класів в елементі
btn[0].classList.remove('green'); // видаляємо клас з елементу
btn[5].classList.toggle('yellow'); // якщо такого класу нема - додаємо, якщо ні- прибираємо
console.log(btn[0].classList.contains('red')); // перевіряємо чи є такий клас у елемента

//* Приклад з делугування подій

//macthes() - універсальний пошук по будь-якому критерію який співпаде
wrap.addEventListener('click', (event) => { // вішаємо обробник подій на батьківський елемент
	if (event.target.matches('button')) { // якщо ми у батьківському елементі настиснемо на елемент який буде мати тег button
		btn[3].classList.toggle('green'); // то ми додаємо/прибираємо клас для 4-ї кнопки
	} else {
		console.log('Its not button'); // якщо натискаємо не на кнопти то виводимо повідомлення
	}
});
// tagName, nodeName, type і т.д.
wrap.addEventListener('click', (event) => { // вішаємо обробник подій на батьківський елемент
	if (event.target.tagName === 'BUTTON') { // якщо ми у батьківському елементі настиснемо на елемент який буде мати тег button
		btn[3].classList.toggle('green'); // то ми додаємо/прибираємо клас для 4-ї кнопки
	} else {
		console.log('Its not button'); // якщо натискаємо не на кнопти то виводимо повідомлення
	}
});

// Тож самий classList.toggle тільки розписаний покроково
btn[0].addEventListener('click', () => {
	if (!btn[5].classList.contains('yellow')) {
		btn[5].classList.add('yellow');
	} else {
		btn[5].classList.remove('yellow');
	}
});

// Перебір кнопок
btn.forEach((item) => {
	item.addEventListener('click', (event) => { // натискаючи одну з кнопок виводимо її в консоль за допомогою обробника події
		console.dir(event.target);
	});
});

//* Робота з елементами на сторінці (Tabs переключення)
/*
hideFunction
1. Спочатку приховуємо всі елементи контенту - дадаємо клас (ClassList.add('hide'))
2. Потім видаляємо у всіх елементів - видаляємо клас (ClassList.remove('show'))
3. Клас активності в кнопти - видаляємо клас (ClassList.remove('tabs__active'))

showFunction
1. Показуємо всі елементи контенту - дадаємо клас (ClassList.add('show'))
2. Потім видаляємо у всіх елементів - видаляємо клас (ClassList.remove('hide'))
3. Клас активності в кнопти - додаємо клас (ClassList.add('tabs__active'))

Вішаємо на батьківський елемент Tabs_ів слухач з обробником події на який стався клік (event.target). Запускаємо перебір Tabs та робимо умову, якщо Tabs дорівняє елементу на який клікнули то запускаємо функцію hideFunction та showFunction(в аргумент передаємо порядковий номер при переборі Tabs) */

window.addEventListener('DOMContentLoaded', () => {

	const tabContent = document.querySelectorAll('.tabcontent'),
		tabItem = document.querySelectorAll('.tabheader__item'),
		tabParents = document.querySelector('.tabheader__items');

	const hideTabContent = () => {
		tabContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show');
		});

		tabItem.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	};

	const showTabContent = (i = 0) => {
		tabContent[i].classList.add('show');
		tabContent[i].classList.remove('hide');
		tabItem[i].classList.add('tabheader__item_active');
	};

	hideTabContent();
	showTabContent(0);

	tabParents.addEventListener('click', (event) => {
		const target = event.target;
		tabItem.forEach((item, i) => {
			if (target === item) {
				hideTabContent();
				showTabContent(i);
			}
		});
	});
});

//* SetTimeOut / SetInterval (таймер)

// SetTimeOut
const timerOut = setTimeout(someFn, 2000); // передаємо функцію та час через який вона виконається лише раз (2сек)

clearTimeout(timerOut); // очищаємо таймер

function someFn () {
	console.log('Test');
}

// SetInterval
const timerIn = setInterval(someFn, 2000); // передаємо функцію та час через який вона виконається повторно (2сек)


// Робимо анімацію за допомогою SetInterval
const btnAnim = document.querySelector('.btn'); //1 витягуємо елементи
const box = document.querySelector('.box'); 

function animation () {
	let position = 0; //3 створюємо лічильник

	const id = setInterval(frame, 10); //4 створюємо таймер та передаємо в нього функцію як саме буде рухатись анімація, та через який час

	function frame () { 
		if (position == 300) { //5 якщо лічильник доходить до 300 то очищаємо таймер
			clearInterval(id); 
		} else { 
			position++; //6 кожний раз збільшуємо лічильник на 1
			box.style.top = position + 'px'; // та міняємо css властивості
			box.style.left = position + 'px';
		}
	}
}
btnAnim.addEventListener('click', animation); //2 клікаємо на кнопку та визиваємо функцію

//* WeakMap / WeakSet / Збірник сміття
/* Те ж саме що і батьківські структури даних але працюють зі збірником сміття
Збірник сміття - видаляє (автоматично) дані до яких нема більше доступу - ссилок
*/

let trash = {
	name: 'Jonh'
};

const newTrash = trash;

trash = null; // якщо перезаписати змінну, то об'єкт який в ній був буде більше не доступний (якщо нема інших ссилок на нього) та видалиться збірником сміття (автоматично). Якщо ссилки були на нього в інших структурах даних то цей об'єкт збережеться.
//console.log(trash);
//console.log(newTrash);

// Не зберігають в собі дані навіть якщо на них ссилається в середині WeakMap та WeakSet, видаляються автоматично. Ключі можуть бути тільки Object. Такі структури даних не перебираються
const arrObj = [
	{name: 'Alex'},
	{name: 'Jong'}
];

const wMap = new WeakMap(); // set / has/ / get / delete
const wSet = new WeakSet(); // add / has / delete

wMap.set(arrObj[0]); // додали до "слабкоїКарти" дані (створили ссилку)
console.log(wMap.has(arrObj[0]));

arrObj.shift(); // видалили перший Object

console.log(wMap.has(arrObj[0])); // "слабкаКарта" більше не має даного Object, хоча раніше на нього створили ссилку.

//* Data (час)

const now = new Date();
console.log(now); // поточна дата та час (всесвітній)
console.log(now.toLocaleString()); // поточний дата та час (ваш часовий пояс)
console.log(now.getTime()); // дата в мілісекундах від 1970року

let start = new Date();

for (let i = 0; i < 9999999; i++) {
	let res = i ** 2;
}

let end = new Date();

console.log(`Цикл виконався за ${end - start} мілісекунд`);

//* Параметри документа

const wrapBlock = document.querySelector('.wrap-animation');

console.log(wrapBlock.clientWidth); // розмір документа (вікна) в px без урахування margin/padding (якщо не встановлено border-box)
console.log(wrapBlock.offsetWidth); // розмір документа (вікна) в px з урахування margin/padding/border
console.log(wrapBlock.scrollHeight); // розмір документа (вікна) в px без урахування margin/padding та з урахуванням прокрутки
const style = window.getComputedStyle(wrapBlock); // отримання всіх стилів які діють на елемент
console.log(style);

console.log(window.scrollBy(0, 200)); // скрол від поточного місця на сторінці (X, Y)
console.log(window.scrollTo(0, 200)); // скрол від початку сторінки(X, Y)

console.log(window.scrollY); // скільки відскролено від верху (вертикально) сторінки до поточного місця де зупинились в px 
console.log(document.documentElement.clientHeight); // висота вікна юзера (те що бачить фактично)
console.log(document.documentElement.scrollHeight); // загальна висота скролу від верху до низу сторінки

//* MutationObserver 
// предоставляет возможность получать уведомления об изменении определённых DOM-элементов.

let record = new MutationObserver(MutationRecord => { // конструктор з колбек функцією
	console.log(MutationRecord);
});

record.observe(wrapBlock, {  // Подписывает экземпляр MutationObserver на получение уведомлений о манипуляциях с DOM-элементом.
	childList: true 
});

//* Функції конструктори
// Робиться шаблон від якого створюються різні екземпляри об'єкту на його базі

function User (name, age) { // функція конструктор (шаблон)
	this.user = name;
	this.old = age;
	this.human = true;
	this.message = function () { // створення методу
		console.log(`Ім'я юзера ${this.user}, йому ${this.old} років`);
	};
}

// Якщо нема доступу або не можна міняти сам шаблон
User.prototype.city = function () {
	console.log('Miami');
};

const someUser = new User('Jonh', 35); // підставляємо аргументи для свотрення нового об'єкту
console.log(someUser);
someUser.message();
someUser.city();

//* Контекст виклику (this)

// 1. в фукнкціях Declaration та Expression контекст виклику this - undefined або window
function one () {
	console.log(this);
}
one();

// 2. в Object контекст виклику this - це сам Object в якому він викликається
const objThis = {
	user: 'Marty',
	location: 23214,
	country: function () {
		console.log(this);
	}
};
objThis.country();

// 3. в функціях-конструкторах та класах контекст виклику this - це новий екземпляр Object
function Office (dep, count) { // функція-конструктор
	this.departament = dep;
	this.count = count;
	this.size = function () {
		console.log(`Name ${this.departament}, has ${this.count} people`); // в цій функції контекст виклику this - це новий екземпляр Object
		function callback () {
			console.log(this); // в цій функції контекст виклику this - undefined, а якщо це стрілочна функція то this - буде посилатись на сам Object (шукає батька)
		}
		callback();
	};
}
const company = new Office('Google SoftwareIngineer', 150); // новий екземпляр Object
console.log(company);
console.log(company.size());

// 4. Ручна прив'язка this через: call, apply, bind
function some (obj) {
	console.log(this.first * obj);
	console.log(this * obj);
}

const objCount = {
	first: 10
};

some.call(objCount, 3); // привязуємо до функції Object (щоб був контекст виклику this), та передаємо аргумент для функції
some.apply(objCount, [2]); // привязуємо до функції Object (щоб був контекст виклику this), та передаємо аргумент для функції
const bindThis = some.bind(5); // забиваємо в ручну контекст this(2)
console.log(bindThis(10)); // тут вже викликається функція та передається в неї аргумент

// 5. Стрілочна функція не має контексту виклику this в обробниках подій
btnAnim.addEventListener('click', () => {
	console.log(this); // контекст виклику this - window
});

btnAnim.addEventListener('click', function () {
	console.log(this); // контекст виклику this - це буде сам елемент (теж саме, що і event.target)
});

//* Класи (Classes) конструктори (називають 'синтаксический сахар')

class Company { // створюємо класс 
	constructor(name, country) { // передаємо аргументи в конструктор
		this.name = name; // додаємо ключі
		this.from = country;
	}
	message() { // створюємо метод
		//console.log(`Компанія ${this.name} знаходиться в ${this.from}`);
		return `Компанія ${this.name} знаходиться в ${this.from}`;
		//console.log(this);
	}
}

const copy = new Company('Amazon', 'USA'); // новий екземпляр класу (Object)
console.log(copy.message());

// Наслідування класу (копіювання батьківського шаблону)
class Departament extends Company { // наслідуємо методи та ключі з батьківського класу
	constructor(name, country, peopleQty, gender) {
		super(name, country); // які ключі нам потрібні з батьківського класу
		this.qty = peopleQty; // додаємо нові ключі
		this.gender = gender;
	}
	answer() { // створюємо метод
		return `Департамент компанії ${this.name} знаходиться в ${this.from}, має в штаті ${this.qty} людей, такої статі - ${this.gender}`;
	}
}

const mess = new Departament('Google', 'Japan', 750, 'Male'); // новий екземпляр класу (Object)
console.log(mess.answer()); 
console.log(mess.message()); // викликається батьківський метод в новому екземплярі класу

//* Rest оператор (аргументи в функції)
// Збирає всі залишкові аргументи функції в масив

function rest (a, b, ...rest) {
	console.log(a, b, rest);
}
rest('One', 'Second', 'Third', 'Four', 'Five'); // передаємо в функції аогументи більше чим 2, інші запишуються в масив