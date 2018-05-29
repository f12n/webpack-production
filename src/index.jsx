import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/root'

const store = createStore(todoApp)
const root = document.getElementById('root');

console.log(root)
render(
    <Root store={store} />,
    root
)