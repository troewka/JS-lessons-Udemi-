import { useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './charList.scss';

const CharList = (props) => {
    const [charsList, setCharsList] = useState([]);
    const [newCharLoading, setNewCharLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [charEnd, setCharEnd] = useState(false);

    const {loading, error, getAllСharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewCharLoading(false) : setNewCharLoading(true);
        getAllСharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 6) {
            ended = true
        }

        setCharsList(char => [...char, ...newCharList]);
        setNewCharLoading(newChar => false);
        setOffset(offset => offset + 6);
        setCharEnd(ended)
    }

    const renderItems = (arr) => {
        const items = arr.map(item => {
            let imgStyle = {'objectFit': 'contain'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'unset'};
            }
            return (
                <li className="char__item"
                    key={item.id}
                    onFocus={() => props.selectId(item.id)} // був onClick
                    tabIndex={0}>
                    <img src={item.thumbnail} alt="abyss" style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )   
        })
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(charsList)

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newCharLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items} 
            <button 
                className="button button__main button__long"
                disabled={newCharLoading}
                style={{'display': charEnd ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
                >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
    
export default CharList;

//class CharList extends Component{
///*
//1. Створюємо стейт і в ньому 3 свойста
//2. Створюємо хук
//3. В ньому викликаємо метод по запиту до сервера
//4. Він повертає відповідь (масив) або помилку
//5. Далі відповідь (результат) передаємо до метода через агргумент
//6. Змінюємо стейт даними які ми отримали з сервера
//7. Деструктуризуємо стейт
//8. Створюємо новий метод результат якого записуємо в змінну. В цей метод передаємо агрумент наш масив який ми раніше заисали в стейт
//9. В цьому методі перебираємо масив, та пушимо відповідні дані в верстку
//10. Результат виконання цього методу заносться в змінну, яка в свою чергу рендериться в головному компоненті
//*/
//    state = { //1
//        charsList: [],
//        loading: true,
//        error: false,
//        newCharLoading: false,
//        offset: 1530,
//        charEnd: false
//    }

//    marvelService = new MarvelService();

//    // Перша ініціалізація на сторінці
//    componentDidMount() { //2
//        this.onRequest();
//    }

//    // Метод по запиту на сервер
//    onRequest = (offset) => {
//        this.onCharListLoading();
//        this.marvelService.getAllСharacters(offset) //3
//        .then(this.onCharListLoaded) //4, 5
//        .catch(this.onError) //4
//    }

//    // Метод який діє при завантажені (дані ще не сформовані)
//    onCharListLoading = () => {
//        this.setState({
//            newCharLoading: true
//        })
//    }

//    // Метод який формує стейт з готовими даними які повернулись з сервера (завантажння завершено)
//    onCharListLoaded = (newCharList) => {
//        let ended = false;
//        if (newCharList.length < 9) {
//            ended = true
//        }
//        this.setState(({offset, charsList}) => {
//            return {
//                charsList: [...charsList, ...newCharList], 
//                loading: false,
//                newCharLoading: false,
//                offset: offset + 9,
//                charEnd: ended
//            }
//        })
//    }

//    onError = () => {
//        this.setState({
//            error: true,
//            loading: false
//        })
//    }
    
//    renderItems = (arr) => { //9
//        const items = arr.map(item => {
//            let imgStyle = {'objectFit': 'contain'};
//            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
//                imgStyle = {'objectFit': 'unset'};
//            }
//            return (
//                <li className="char__item"
//                    key={item.id}
//                    onFocus={() => this.props.selectId(item.id)} // був onClick
//                    tabIndex={0}>
//                    <img src={item.thumbnail} alt="abyss" style={imgStyle}/>
//                    <div className="char__name">{item.name}</div>
//                </li>
//            )   
//        })
//        return (
//            <ul className="char__grid">
//                {items}
//            </ul>
//        )
//    }

//    render() {
//        const {charsList, loading, error, newCharLoading, offset, charEnd} = this.state; //7
//        const item = this.renderItems(charsList) //8

//        const errorMessage = error ? <ErrorMessage/> : null;
//        const spinner = loading ? <Spinner/> : null;
//        const content = !(loading || error) ? item : null; //10
//        return (
//            <div className="char__list">
//                {errorMessage}
//                {spinner}
//                {content} 
//                <button 
//                    className="button button__main button__long"
//                    disabled={newCharLoading}
//                    style={{'display': charEnd ? 'none' : 'block'}}
//                    onClick={() => this.onRequest(offset)}
//                    >
//                    <div className="inner">load more</div>
//                </button>
//            </div>
//        )
//    }
//}

//export default CharList;

/*
1. Формуємо стейт
2. Створюємо метод по запиту на сервер (onRequest)
3. Отримуємо відповідь з сервера та передаємо через then до іншого метода (onCharListLoaded)
4. Цей метод перезаписує стейт даними які прийшли з сервера
5. Для початкової ініціалізації закидуємо метод (onRequest) в хук componentDidMount
6. Вішаємо на button onClick та запускаємо метод (onRequest)
*/