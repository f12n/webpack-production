import React from 'React';
import { NavLink } from 'react-router-dom';
import '../style/nav'

const NavBar = () => (
    <div>
        <div>
            <NavLink exact to='/'> root app </NavLink> |&nbsp;  
            <NavLink to='/one'> one </NavLink> |&nbsp;  
            <NavLink to='/two'> two </NavLink> 
        </div>
    </div>
)

export default NavBar;