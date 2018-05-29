import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodos'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../style/one';

const One = () => (
  <div>
    <div>one</div>
      <ul>
        <li>
          <NavLink
            to={'/one'}
            activeStyle={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            {'----one----'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/two'}
            activeStyle={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            {'----two----'}
          </NavLink>
        </li>
      </ul>

  </div>
)

export default One
