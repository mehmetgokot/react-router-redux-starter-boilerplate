import React from 'react';
import './App.css';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const _history = createBrowserHistory();

const history = syncHistoryWithStore(_history, store);

const AppRoute = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
            <span>
                <Route exact path="/" component={Home}/>
                <Route path="/app2" component={Page2}/>
                <Route path="/app3" component={Page3}/>
                <Route path="/app4" component={Page4}/>
            </span>
            </Router>
        </Provider>
    )
};

export default AppRoute;
