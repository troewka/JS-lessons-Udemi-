import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../../components/appBanner/AppBanner';
import './singleComic.scss';

const SingleComic = () => {

    const [data, setDate] = useState({});
    const {getComics} = useMarvelService();

    const {id} = useParams();


    useEffect(() => {
        onRequest(id);
    }, [id])

    const onRequest = (id) => {
        getComics(id)
            .then(dataLoaded);
    }

    const dataLoaded = (data) => {
        setDate(data)
    }

    const {title, thumbhail, descr, pageCount, price, language} = data;

    return (
        <>
            <AppBanner/>
            <div className="single-comic">
                <img src={thumbhail} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{descr}</p>
                    <p className="single-comic__descr">{pageCount} pages</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to='/comics' className="single-comic__back">Back to all</Link>
            </div>
        </>

    )
}

export default SingleComic;