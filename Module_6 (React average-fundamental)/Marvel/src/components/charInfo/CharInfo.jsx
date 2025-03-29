import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';


const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const {loading, error, getСharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.onSelectedId])

    const updateChar = () => {
        const {onSelectedId} = props;
        if (!onSelectedId) {
            return;
        }
        clearError();
        getСharacter(onSelectedId)
            .then(onCharLoaded)
    }
    
    const onCharLoaded = (char) => {
        setChar(char);
    }
     
    const skeleton = char || loading || error ? null : <Skeleton/>;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const date = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {spinner}
            {errorMessage}
            {date}
        </div>
    )

}

const View = ({char}) => {
    const {name, descr, thumbnail, detail, wiki, comics} = char;
    let imgStyle = {'objectFit': 'contain'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit': 'unset'};
    }
    return (
        <>
            <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={'#'} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={'#'} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {descr}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There not any comics'}
                {comics.map((item, i) => {
                    if (i > 9) return;
                    return (
                        <li key={i} className="char__comics-item">
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CharInfo;