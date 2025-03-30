import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AppHeader from "../appHeader/AppHeader";
import { ComicsPage, MainPage, NotFoundPage } from "../../page";
import SingleComic from "../../page/comicsSingle/SingleComic";

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>
                        <Route exact path='/comics'>
                            <ComicsPage/>
                        </Route>
                        <Route exact path='/comics/:id'>
                            <SingleComic/>
                        </Route>
                        <Route path='*'>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;