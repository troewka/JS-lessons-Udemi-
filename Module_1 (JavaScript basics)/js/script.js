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

const obj = { //Object
	name: 'Adam', // ключ - значення
	old: 18,
	place: {
		country: 'USA',
		city: 'New York'
	},
	salary: [5000, 200]
};
console.log(obj.place); // вивід ключа
delete obj.old; // видалення ключа
obj.gender = 'male'; // додавання ключа


const arr = ['milk', 18, {products: 'apple'}]; // Array
// 0: 'milk', 1: 18, 2: {products: apple} // ключ - значення
console.log(arr[2]); // {products: apple}

// Різниця між об'єктами та масивами, те що елементи в масиву йдуть попопрядку (0, 1, 2), об'єкти ні.

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
//&& - І
//|| - АБО
// оператор ! - НЕ

const num = 5;
const num2 = 10;

num++; // інкримент посфіксий (збільшує число на 1 після одного проходу)
num2--; // декримент посфіксий (зменшує число на 1 після одного проходу)
++num; // інкримент префіксний  (збільшує число на 1 до проходу)
--num2; // декримент префіксний (зменшує число на 1 до проходу)

const procent = 52 % 3; // залишок від ділянення (5 / 2 = 2,5 - не ціле число, округлюється і залишається процент від ділення 1)
console.log(procent);
// Якщо ділити не парні числа на парні - буде залишатись залишок (1)
// Якщо ділити парні числа на парні - буде залишатись залишок (0)

//-----------------------------------------------------------------------------------------------------------------------------------------//

//*GIT
// git init - щоб GIT слідкував за папкою в якій він ініціалізірувався
// git status - переглянути якій статус у всіх файлах
// git add -A - вибрати всі файли
// git commit -m "my comment" - закомітити всі файли (зробити точку збереження)
// git push - відправити всі (змінені) файли на репозиторій GitHub