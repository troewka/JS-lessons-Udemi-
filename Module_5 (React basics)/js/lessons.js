'use strict';

// React компоненти - це кусочки коду (елементів), які можна перевикористовувати скільки завгодно. Рендер - відмалювання сторінки (оновлення)

//*JSX стиль коду (html + js)
const text = 'Welcome to React page'
const elem = ( // створюється елемент, якщо це багаторівневий код то від обертається в (). Завжди повинен бути тільки один корінний елемент! (тут div). Додавання класу іде через атрибут className (не як в html class), та через CamelCase стилістику. В інтерполяцію не можна передавати Object, те що в {} прирівнюється до строчки

   <div>
      <h2 className='some'>{text}</h2> 
      <input type="text" />
      <button tabIndex='0'></button>
   </div>
);

/*
1. Створюється React проект з відповідною структурою (public, src)
2. В public є файл index.html, в який ми можемо підключати різні бібліотеки наприклад Bootstrap стилі і т.д. В цьому файлі верстку ми не пишемо. Там є головний div з класом root в який ренериться вся верстка з різних компонентів
3. Працюємо в папці src де э файли index.js та index.css (можливо бути більше)
4. index.js головний файл в якому підключається React бібліотека, головні стилі, та рендериться в root всі зібрані компоненти
5. в src створюється папка components і в ній вже створюються різні компоненти (частинки застосунку) наприклад шапка, картки, модальні вікна, пошук, півал і тд. Вони також розбиваються на окреми папки в який знаходяться файл js та css
6. Також в цій папці components створюється папка app яка буде збирати всі компоненти та імпорти
7. Приблизно такий шлях проекту - BtnComponent.js+btn-component.css ==> import to AppComponent ==> AppComponent to import index.js для рендерегну в root
8. Компоненти можуть і мають використовуватись в інших компонентах. Тобто ми експортуємо в AppComponent тільки компонент №2 так як в ньогму вже є компонент №1 (вони повязані з собою через експорт імпорт)
9. Props (свойства компонентів) - це аргументи які передаються в компонент (як аргументи передаються в функцію). Ці аргументи передаються через атрибути компонента
10. Процес рендер - при зміні будь яких елементів React порівняє (алгоритм погодження) що дійсно змінилось та рендерить тільки те що оновилось. Якщо змінився коріневий елемент наприклад тег, то React перемалює всі дочірні елементи які навіть не змінювались. Якщо змінились атрибути в елементів то React буде порівнювати один елемент з одним і якщо є відміна перезапише старий елемент на новий.
11. Коли React порівняє елементи списку (li) потрібно використовувати атрибут key для такого списку.
12. Пропси призначенні тільки для читання. У компонента може бути внутрішній стан State (який динамічно змінюється), на пряму його змынювати не можна, тільки за допомогою команди setState (асинхрона операція)
13. Метод setState створює копію існуючого state (який знаходиться в constructor), який при рендері порівняється з попереднім state і зміни запишуться в новий компонент.
*/

// Функціональні компоненти
//-----------------------------Components #1----------------------------------------
import './input-style.css'
const InputComp = () => { // components
   return (
      <div className='input-style'>
         <input 
         type="text"
         placeholder='Введите что то...' 
         />
      </div>
   )
}
export default InputComp;

//-----------------------------Components #2----------------------------------------
import InputComp from './components/input/input'
import './btn-component.css'

const BtnComponent = ({name, surname}) => { // component with props (деструктиризуємо пропси)
   return (
      <div className='btn'>
         <h1>My name {name}, surname - {surname}</h1>
         <h2 className='some'>{text}</h2> 
         <input type="text" />
         <button tabIndex='0'></button>
         <InputComp/>
      </div>
   )
}
export default BtnComponent;

//-----------------------------Components #3----------------------------------------
import BtnComponent from './components/btn/btn'
import './some-style.css'

const SomeComponent = () => { // components
   return (
      <div className='some-style'>
         <h2 className='some'>{text}</h2> 
         <input type="text" />
         <button tabIndex='0'></button>
         <BtnComponent name='Jonh' surname='Rembo'/> /Використовуємо компонент з свойставми тобто аргументами які передаються в інший компонент у вигляді пропсів*/
      </div> 
   )
}
export default BtnComponent;

// Класові компоненти --------------------------------------------------------------

import { Component } from 'react'; // імпортуємо головнй клаc компонента з бібліотеки react
class SomeComp extends Component { // робимо наслідування з головного копонента
   constructor (props) { // створюємо конструктор та передаємо туди пропси з нашого екземпляра класу
      super(props); // super - используется как функция, вызывающая родительский конструктор. Тобто в кожному екземплярі компонента будуть передаватись пропси
      this.state = { // створюємо тут нове свойство (стану компоненту, попередній стан)
         years: 32
      }
   }

   nextYear = () => { // створюємо метод по зміні стана State
      this.setState(state => ({ 
         years: state.years + 1
      }))
   }

   render() {
      return (
         <div className='btn'>
         <h1>Jonh is {this.state.years} years</h1>
         <h2 className='some'>{text}</h2> 
         <input type="text" />
         <button tabIndex='0'></button>
      </div>
      )
   }
}

console.log(Math.floor(Math.random() * 50));




const arr = [1, 3, 10, 5, 7, 78]
const obj = {
   name: 'Oleg',
   age: 30,
   country: 'UA'
}

const arrObj = [
   {
      name: 'Eugene',
      age: 32,
      country: 'Spain'
   },
   {
      name: 'Gena',
      age: 32,
      country: 'USA'
   },
   {
      name: 'Yana',
      age: 29,
      country: 'USA'
   },
]

const newArr = [...arr, obj, ...arrObj]

console.log(newArr);