import _ from 'lodash';

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './app'
import One from './one'
import Two from './two'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/:filter?" component={App} exact />
                <Route path="/one" component={App} exact />
                <Route path="/two" component={App} exact />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;