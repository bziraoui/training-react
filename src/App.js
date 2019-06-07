import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomeRedux, { Home } from './components/home';
import { Stateless } from './components/stateless';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/stateless">Stateless</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={HomeRedux} />
                    <Route path="/stateless" component={Stateless} />
                </Switch>
            </nav>
        </Router>
    );
}

export default App;
