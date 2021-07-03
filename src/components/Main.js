
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavigationBar from './NavigationBar';
import WelcomePage from '../pages/WelcomePage';
import AsteroidsPage from '../pages/asteroids/AsteroidsPage';
import FetchData from '../services/FetchData';

export default function Main() {

    FetchData()

    return (
        <Router basename="react-aladin">
            <div>
                <NavigationBar/>

                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route exact path="/asteroids">
                        <AsteroidsPage />
                    </Route>

                </Switch>
            </div>
            <footer>
                <small> (C) 2021 - Nico Vermaas - version 1.0.0 - 2 july 2021</small>
            </footer>
        </Router>

    );
}
