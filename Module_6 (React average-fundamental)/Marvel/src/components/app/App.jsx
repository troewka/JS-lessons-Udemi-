import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AppHeader from "../appHeader/AppHeader";
import { ComicsPage, MainPage } from "../../page";
import SingleComic from "../singleComic/SingleComic";

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
                        {/*<SingleComic/>*/}
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;