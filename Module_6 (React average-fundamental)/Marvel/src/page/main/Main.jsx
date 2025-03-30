import { useState } from "react";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import RandomChar from "../../components/randomChar/RandomChar";
import CharList from "../../components/charList/CharList";
import CharInfo from "../../components/charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';

const MainPage = () => {

  const [onSelected, setOnSelected] = useState(null);

  const onSelectedChar = (id) => {
      setOnSelected(id)
  }

  return(
    <>
      <ErrorBoundary>
          <RandomChar/>
      </ErrorBoundary>
      <div className="char__content">
      <CharList selectId={onSelectedChar}/>
      <ErrorBoundary>
          <CharInfo onSelectedId={onSelected}/>
      </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision"/>
    </>
  )
}

export default MainPage;
