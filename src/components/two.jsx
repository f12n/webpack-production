import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodos'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { NavLink } from 'react-router-dom'
import '../style/two';

export default class Two extends React.Component {
  render() {
    return (
      <div>two页面</div>
    );
  }
}