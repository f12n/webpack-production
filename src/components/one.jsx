import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodos'

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import '../style/one';
export default class One extends React.Component {
  render() {
    return (
      <div>One页面</div>
    );
  }
}