// React libraries.
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { hot } from 'react-hot-loader';

import '../public/assets/scss/index.scss';

import 'bootstrap';

/**
 * The application layout for the website.
 */
class App extends React.Component {
    render = () => {
        return (
            <div id="app" className="text-light d-flex flex-column h-100">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <span>Hello World!</span>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default hot(module)(App);
