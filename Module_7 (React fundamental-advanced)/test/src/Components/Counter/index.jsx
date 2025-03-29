import React, { useState, useEffect} from "react";
import styles from './styles.css';

//* Конвертер валют
/*
1. Створюємо функціональний компонент та передаємо в нього пропси
2. Створюємо state [data, setData] (передаємо туди пустий масив), який буде зберігати дані які прийдуть з сервера. useState - це хук який містить в собі масив з двох елементів: 1. State; 2. Функція що змінює цей State
3. Створюємо функцію Request (з аргументом) по запиту на сервер та перевіряємо чи дані якісь прийшли, якщо ні - виводимо повідомлення (ця функція як шаблон щоб можна було її перевикористовувати)
4. Створюємо функцію getData в якій викликаємо функцію Request та передаємо в неї аргумент (url). Отримані дані перебираємо та викликаємо наступну функцію FormedData, яка повертає готову структуру, яка записується в стейт (setData).
5. FormedData функція яка отримує масив даних та повертає об'єкт з потрібною структурою
6. Використовуємо useEffect та запускаємо там функцію getData яка відповідає за запит на сервер. useEffect - це хук який відслідковує зміни в React (створення компонента, оновлення компонента, видалення компонента - так званий життєвий цикл компонента)
7. Один стейт з отриманими данити [data, setData] - зформований.
8. Створюємо другий state [result, setResult]
9. Створюємо функцію Currency (з аргументом), яка буде фільтрувати готовий (перший State) data, та буде порінювати валюту яка знаходиться в стейті з валютою яка прийшла як аргумент.
10. Записуємо за допомогою функції (setResult) в стейт (result) математичний вираз, де береться дані з пропса який прийшов в компонент Counter та ділимо його на дані зі стейту result (а там знаходиться відфільтрований масив) поточний курс.
11. Створюємо функцію Reset яка буде записувати в стейт 0
12. При кліку на кнопку з валютою запускаємо колбек функцію і в ній запускаємо функцію Currency та передаємо туди аргумент.
*/
export const Counter = (props) => {

  const [data, setData] = useState([]); 
  const [result, setResult] = useState();
  const [input, setInput] = useState();

  useEffect(() => { // використовується при запитах на сервер, таймерах, підписках.
    getData(); // рендириться тільки 1 раз при завантажені сторінки
  }, [])

  const Request = async (url) => {
    const res = await fetch(url);
    if (!res) {
      console.log(`Request is not defined to ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  const getData = async () => {
    const result = await Request('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    setData(data => result.map(FormedData))
  }

  const FormedData = (arr) => {
    return {
      valueBank: arr.rate,
      currencyBank: arr.cc
    }
  }

  const onInput = (num) => {
    setInput(result => num.target.value)
    console.log(num.target.value);
  }

  const Currency = (curr) => {
    const res = data.filter(item => item.currencyBank === curr)
    console.log(res);
    setResult(result => (input / res[0].valueBank).toFixed(2))
  }

  const Reset = () => {
    setResult(0)
  }

  return (
    <div className='wrap'>
      <div className="input-wrap">
        <div className='value'>{`Ви ввели: (грн)`}</div>
        <input className="input" type="text" onChange={onInput} placeholder="Введіть число"/>
      </div>
      <div className='counter'>{result ? result : 0}</div>
      <div className='controls'>
        <button onClick={() => Currency('USD')}>USD</button> 
        <button onClick={() => Currency('EUR')}>EUR</button>
        <button onClick={() => Currency('PLN')}>PLN</button>
        <button onClick={Reset}>RESET</button>
      </div>
    </div>
  )
}

/*
!Хуки:
*useState - [state, setState] створює внутрішній стан (state), та змінює його (setState).
*useEffect - це колбек функція, яка викликається після того, як компонент вже змонтувався. Якщо порожній масив залежностей - викличеться 1 раз. А якщо вказати там якийсь із стейтів, то при його зміні щоразу викликатиметься ця функція.
*useCallback - мемоізує (кеширує) функцію, зберігаючи на неї посилання між рендерами. І масив залежностей схожий на принцип дії useEffect.
*useMemo - мемоізує (кеширує) значення, зберігаючи на нього посилання між рендерами. І масив залежностей схожий на принцип дії useEffect.
*useRef - встанавлює ссилки на елемент. По суті, useRef схожий на «коробку», яка може містити значення, що змінюється у своїй властивості .current.
*/

//export const Counter = () => {

//  const [inc, setInc] = useState(0); // Хук по роботі зі стейтом, це масив який містить 2 елемента. 1 - це стейт, 2 - це функція що міняє цей стейт

//  const [state, setState] = useState({name: 'Jonh', city: 'Los-Angeles', old: 32}) // можливо передавати в стейт декілька свойст. Але краще робити 1 свойство = 1 стейт
//  console.log(state);

//  function cangeState () { // змінювати стейт з декількома свойствами (розгортаємо старий стейт та міняємо свойство яке потрібно)
//    setState(state => ({
//      ...state,
//      name: state.name = 'Adam'
//    }))
//  }


//  function IncDec (i) { // коли потрібно передати аргумент робимо у виклику колбек функцію
//    setInc(inc => inc += i)
//  }

//  function Random () {
//    setInc(Math.floor(Math.random() * (50 - 1) + 1))
//  }

//  function Reset () {
//    setInc(0)
//  }

//  return (
//    <div className='wrap'>
//      <div className='counter'>{inc}</div>
//      <div className='controls'>
//        <button onClick={() => IncDec(-1)}>INC</button> 
//        <button onClick={() => IncDec(+1)}>DEC</button>
//        <button onClick={Random}>RND</button>
//        <button onClick={Reset}>RESET</button>
//      </div>
//    </div>
//  )
//}



