import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';
import './comicsList.scss';

const ComicsList = () => {

    const [data, setData] = useState([]); // дані
    const [offset, setOffset] = useState(0); // скільки буде відступ від ліміта
    const [loadMore, setLoadMore] = useState(false); // кнопка load more (активна/не активна)
    const [removeBtn, setRemoveBtn] = useState(false); // якщо більше нема коміксів кнопка прибирається

    const {getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setLoadMore(false) : setLoadMore(true)
        getAllComics(offset)
            .then(loadedData); 
    }

    const loadedData = (data) => {
        let addNewComics = data.length < 4 ? true : false;

        setData(comics => [...comics, ...data]);
        setLoadMore(false)
        setOffset(offset => offset + 4)
        setRemoveBtn(addNewComics)
    }


    const renderComics = (arr) => {
        const items = arr.map(item => {
            return (
                <li className="comics__item"
                    key={item.id}
                    >
                    <Link to={`comics/${item.id}`}>
                        <img src={item.thumbhail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul> 
        )
    }

    const content = renderComics(data);

    return (
        <>
            <AppBanner/>
            <div className="comics__list">
                {content}
                <button 
                    className="button button__main button__long"
                    disabled={loadMore}
                    style={{'display': removeBtn ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}
                    >
                    <div className="inner">load more</div>
                </button>
            </div>
        </>

    )
}

export default ComicsList;