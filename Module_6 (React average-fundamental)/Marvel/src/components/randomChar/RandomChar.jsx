import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
  const [char, setChar] = useState({});

  const {loading, error, getСharacter, clearError} = useMarvelService(); 
  
  useEffect(() => {
    updateChar();
  }, [])

  const onCharLoaded = (char) => {
    setChar(() => char);
  }
  
  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1  - 20) + 20);
    getСharacter(id)
        .then(onCharLoaded)
  }
  
  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;
  const date = !(loading || error || !char) ? <View char={char}/> : null;

  return (
    <div className="randomchar">
      {spinner}
      {errorMessage}
      {date}
      <div className="randomchar__static">
        <p className="randomchar__title">
            Random character for today!<br/>
            Do you want to get to know him better?
        </p>
        <p className="randomchar__title">
            Or choose another one
        </p>
        <button onClick={updateChar} className="button button__main">
            <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
      </div>
    </div>
  )

}
  
const View = ({char}) => {
const {name, descr, thumbnail, detail, wiki} = char;
const notFoundLink = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className={thumbnail === notFoundLink ? 'randomchar__img randomchar__img_not_found' : 'randomchar__img'}/>
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
            {descr}
        </p>
        <div className="randomchar__btns">
          <a href={'#'} className="button button__main">
              <div className="inner">homepage</div>
          </a>
          <a href={'#'} className="button button__secondary">
              <div className="inner">wiki</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RandomChar;

// Класовий компонент по рандомному відображенню персонажа (логічний)
//class RandomChar extends Component {

////Внутрішній стейт (пустий об'єкт)
//  state = {
//    char: {},
//    loading: true,
//    error: false
//  }
//// Новий екземпляр класу по запиту на сервер
//  marvelService = new MarvelService(); 

//// Hook
//  componentDidMount() {
//    this.updateChar();
//  }

//  onCharLoaded = (char) => {
//    this.setState({
//      char,
//      loading: false,
//      error: false
//    })
//  }

//  onItemLoaded = () => {
//    this.setState({
//      loading: true
//    })
//  }

//  errorChar = () => {
//    this.setState({
//      loading: false,
//      error: true
//    })
//  }
//  /*
//  *Дані з сервера
//    1. Викликаємо метод з іншого класового компоненту (запит на сервер)
//    2. Передаємо в нього рандомний id
//    3. Цей метод повертає об'єкт з даними
//    4. Далі його передаємо в інший метод, який змінює поточний стейт
//    5. Вже с формованого стейту деструктуризуємо дані та рендеремо їх

//  *Додаємо спінер коли завантажується рандомний персонаж, для цього робимо:
//    1. Додаємо в стейт ще одне свойство об'єкта (loading - по замовчуванню ставимо true)
//    2. Створюємо окремий компонент Spinner
//    3. В головному компоненті витягуємо зі стейта 2 свойства
//    4. Створюємо в цьому компоненті ще внутрішній компонент View, який відповідає чисто за рендеринг.
//    5. В внутрішній компонент View передаємо свойство char з нашими даними, там їх дестректуризуємо та вставляємо в верстку
//    6. В головному компоненті в return, робимо умову, якщо дані ще не завантажились показуємо компонент Spinner, якщо навпаки показуємо готовий компонент View та міняємо стейт, переводячи свойство loading - false.
//  *Додаємо відповідь на помилку
//    1. В стейт дадаємо нове свойство error - false
//    2. Створюємо метод по зміні стейту, якщо відбувається помилка errorChar
//    3. При запиту на сервер, якщо приходить помилка, ми ловимо її за допомогою catch, та передаємо туди метод errorChar (який змінює стейт)
//    4. Після цього в рендері головного компонента робимо 3 окремі перевірки та записуємо їх в окремі змінні
//    5. Перевіряємо стейт, роблячи умови по різним свойствам
//    6. Розгортуємо змінні в верстці з відповідними даними
//  */
//  updateChar = () => {
//    const id = Math.floor(Math.random() * (1011355  - 1009224) + 1009224);
//    this.onItemLoaded();
//    this.marvelService
//        .getСharacter(id)
//        .then(this.onCharLoaded)
//        .catch(this.errorChar)
//        //.getAllСharacters()
//        //.then(res => console.log(res))
//  }

//  render() {
//    const {char, loading, error} = this.state;

//    const spinner = loading ? <Spinner/> : null;
//    const errorMessage = error ? <ErrorMessage/> : null;
//    const date = !(loading || error) ? <View char={char}/> : null;

//    return (
//      <div className="randomchar">
//        {spinner}
//        {errorMessage}
//        {date}
//        <div className="randomchar__static">
//          <p className="randomchar__title">
//              Random character for today!<br/>
//              Do you want to get to know him better?
//          </p>
//          <p className="randomchar__title">
//              Or choose another one
//          </p>
//          <button onClick={this.updateChar} className="button button__main">
//              <div className="inner">try it</div>
//          </button>
//          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
//        </div>
//      </div>
//    )
//  }
//}

//// рендеринговий копонент
//const View = ({char}) => {
//const {name, descr, thumbnail, detail, wiki} = char;
//const notFoundLink = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
//  return (
//    <div className="randomchar__block">
//      <img src={thumbnail} alt="Random character" className={thumbnail === notFoundLink ? 'randomchar__img randomchar__img_not_found' : 'randomchar__img'}/>
//      <div className="randomchar__info">
//        <p className="randomchar__name">{name}</p>
//        <p className="randomchar__descr">
//            {descr}
//        </p>
//        <div className="randomchar__btns">
//          <a href={detail} className="button button__main">
//              <div className="inner">homepage</div>
//          </a>
//          <a href={wiki} className="button button__secondary">
//              <div className="inner">wiki</div>
//          </a>
//        </div>
//      </div>
//    </div>
//  )
//}

//export default RandomChar;

