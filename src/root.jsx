import _ from 'lodash';

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/app'
import One from './components/one'
import Two from './components/two'
import NavBar from './components/nav'
const store = createStore(todoApp)
const root = document.getElementById('root');


/* const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <NavBar />
                <Route path="/" component={App} exact />
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
} */

render(
    <Router>
        <div>
            <NavBar />
            <Route path="/" component={App} exact />
            <Route path="/one" component={One} />
            <Route path="/two" component={Two} />
        </div>
    </Router>,
    root
)